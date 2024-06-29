import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FullMovieInfo, ShortMovieInfo } from '../shared/types/types';
import { BASE_URL } from './utils';
import { createEntityAdapter, EntityState } from '@reduxjs/toolkit';

type AllMoviesResponse = {
	search_result: ShortMovieInfo[];
	total_pages: number;
};

type RateMovieResponse = {
	movieId: string;
	newAverageRate: string; // float
	newTotalRatesCount: number;
};

type RateMovieRequestBody = {
	movieId: string;
	user_rate: number;
};

const moviesAdapter = createEntityAdapter<ShortMovieInfo>();

export const api = createApi({
	reducerPath: 'api',
	tagTypes: ['Movie'],
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: (builder) => ({
		getMovies: builder.query<
			EntityState<ShortMovieInfo, string> & { total_pages: number },
			string
		>({
			query: (searchParams) => ({
				url: `search${searchParams}`,
			}),
			transformResponse: (response: AllMoviesResponse) => {
				const { search_result, total_pages } = response;
				const movieData = moviesAdapter.addMany(
					moviesAdapter.getInitialState(),
					search_result
				);
				return { total_pages, ...movieData };
			},
		}),

		getMovieById: builder.query<FullMovieInfo, string>({
			query: (movieId) => ({
				url: `movie/${movieId}`,
			}),
		}),
		rateMovie: builder.mutation<RateMovieResponse, RateMovieRequestBody>({
			query: (rateData) => ({
				url: 'rateMovie',
				method: 'POST',
				body: JSON.stringify(rateData),
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('token')}`,
				},
			}),
			async onQueryStarted({ movieId }, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled;
					const newAverageRate = data.newAverageRate;
					dispatch(
						api.util.updateQueryData('getMovieById', movieId, (draft) => {
							draft.rating = newAverageRate;
						})
					);
				} catch (error) {
					console.log(error);
				}
			},
		}),
	}),
});

export const { useGetMoviesQuery, useGetMovieByIdQuery, useRateMovieMutation } =
	api;
