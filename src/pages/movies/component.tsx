import { MovieCard } from '../../widgets/movie-card/component';
import { SearchInput } from '../../shared/ui/search-input/component';
import { ShortMovieInfo } from '../../shared/types/types';
import styles from './styles.module.css';

type MoviesPageProps = {
	movies: ShortMovieInfo[];
};

export const MoviesPage = ({ movies }: MoviesPageProps) => {
	return (
		<div className={styles.container}>
			<SearchInput />
			{movies.map((movie) => (
				<MovieCard key={movie.id} movie={movie} />
			))}
		</div>
	);
};
