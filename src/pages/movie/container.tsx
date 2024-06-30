import { useParams } from 'react-router-dom';
import { useGetMovieByIdQuery } from '../../redux/api';
import { MoviePage } from './component';
import { Loader } from '../../shared/ui/loader/component';

export const MovieContainer = () => {
	const { movieId } = useParams();
	const { data, isError, error, isLoading } = useGetMovieByIdQuery(
		movieId || ''
	);

	if (isError) {
		console.log(error);
	}

	if (isLoading) {
		return <Loader />;
	}

	if (!data) {
		return null;
	}

	return <MoviePage movie={data} />;
};
