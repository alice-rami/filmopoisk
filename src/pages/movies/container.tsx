import { Loader } from '../../shared/ui/loader/component';
import { useGetMoviesQuery } from '../../redux/api';
import { MoviesPage } from './component';
import { useLocation } from 'react-router-dom';

type MoviesContainerProps = {
	currQuery: URLSearchParams;
	updateQuery: (key: string, value: string) => void;
};

export const MoviesContainer = ({
	currQuery,
	updateQuery,
}: MoviesContainerProps) => {
	const location = useLocation();
	const { data, isError, isLoading } = useGetMoviesQuery(location.search);

	if (isLoading) {
		return <Loader />;
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
			currQuery={currQuery}
			updateQuery={updateQuery}
		/>
	);
};
