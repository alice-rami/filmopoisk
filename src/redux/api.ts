import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FullMovieInfo, ShortMovieInfo } from '../shared/types/types';
import { BASE_URL } from './utils';

type AllMoviesResponse = {
	search_result: ShortMovieInfo[];
	total_pages: number;
};

export const api = createApi({
	reducerPath: 'api',
	tagTypes: ['Movie'],
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: (builder) => ({
		getMovies: builder.query<AllMoviesResponse, void>({
			query: () => ({
				url: 'search',
			}),
		}),
		getMovieById: builder.query<FullMovieInfo, string>({
			query: (movieId) => ({
				url: `movie/${movieId}`,
			}),
		}),
	}),
});

export const { useGetMoviesQuery, useGetMovieByIdQuery } = api;
