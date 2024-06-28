import { useParams } from 'react-router-dom';
import { useGetMovieByIdQuery } from '../../redux/api';
import { MoviePage } from './component';

export const MovieContainer = () => {
	const { movieId } = useParams();
	const { data } = useGetMovieByIdQuery(movieId || '');

	if (!data) {
		return null;
	}

	return <MoviePage movie={data} />;
};
