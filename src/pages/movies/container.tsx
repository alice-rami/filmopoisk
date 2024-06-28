import { useEffect } from 'react';
import { useGetMoviesQuery } from '../../redux/api';
import { MoviesPage } from './component';
import { useAppDispatch } from '../../shared/hooks/reduxHooks';
import { userSliceActions } from '../../redux/login/index';

export const MoviesContainer = () => {
	const { data, isError, isLoading } = useGetMoviesQuery();
	const dispatch = useAppDispatch();

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (typeof token === 'string') {
			dispatch(userSliceActions.setIsAuthorized(true));
		} else {
			dispatch(userSliceActions.setIsAuthorized(false));
		}
		dispatch(userSliceActions.setIsAuthChecked(true));
	}, []);

	if (isLoading) {
		return <p>Loading...</p>;
	}
	if (isError) {
		console.log('error');
	}
	if (!data?.search_result || data.search_result.length === 0) {
		return null;
	}
	return <MoviesPage movies={data.search_result} />;
};
