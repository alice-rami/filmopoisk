import { useEffect } from 'react';
import { useGetMoviesQuery } from '../../redux/api';
import { MoviesPage } from './component';
import { useAppDispatch } from '../../shared/hooks/reduxHooks';
import { userSliceActions } from '../../redux/login/index';
import { useLocation, useSearchParams } from 'react-router-dom';
import { GenresEn, YearKeys } from '../../widgets/filter/config';

type SearchParams = {
	page?: string;
	genre?: GenresEn;
	release_year?: YearKeys;
	title?: string;
};
// type Params = keyof SearchParams;

export const MoviesContainer = () => {
	const init: SearchParams = {};
	const [searchParams, setSearchParams] = useSearchParams(init);
	const location = useLocation();
	const { data, isError, isLoading } = useGetMoviesQuery(location.search);
	const dispatch = useAppDispatch();

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (typeof token === 'string') {
			dispatch(userSliceActions.setIsAuthorized(true));
		} else {
			dispatch(userSliceActions.setIsAuthorized(false));
		}
		dispatch(userSliceActions.setIsAuthChecked(true));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const updateQuery = (newKey: string, newValue: string) => {
		const params: Record<string, string> = {};
		setSearchParams((prev) => {
			if (prev.has(newKey) && newValue.length === 0) {
				prev.delete(newKey);
			}
			prev.forEach((value, key) => {
				params[key] = value;
			});
			if (newValue.length > 0) {
				params[newKey] = newValue;
			}
			return params;
		});
	};

	if (isLoading) {
		return <p>Loading...</p>;
	}
	if (isError) {
		console.log('error');
	}

	if (!data) {
		return <div>Что-то пошло не так</div>;
	}
	return (
		<MoviesPage
			movies={Object.values(data.entities)}
			maxPageCount={data.total_pages}
			currQuery={searchParams}
			updateQuery={updateQuery}
		/>
	);
};
