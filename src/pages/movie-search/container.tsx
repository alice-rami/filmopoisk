import { useEffect } from 'react';
import { useAppDispatch } from '../../shared/hooks/reduxHooks';
import { userSliceActions } from '../../redux/login/index';
import { useSearchParams } from 'react-router-dom';
import { GenresEn, YearKeys } from '../../widgets/filter/config';
import { MovieSearchPage } from './component';

type SearchParams = {
	page?: string;
	genre?: GenresEn;
	release_year?: YearKeys;
	title?: string;
};

export const MovieSearchContainer = () => {
	const init: SearchParams = {};
	const [searchParams, setSearchParams] = useSearchParams(init);
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
			if (newKey !== 'page') {
				prev.delete('page');
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

	return <MovieSearchPage currQuery={searchParams} updateQuery={updateQuery} />;
};
