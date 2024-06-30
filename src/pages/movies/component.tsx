import { MovieCard } from '../../widgets/movie-card/component';
import { ShortMovieInfo } from '../../shared/types/types';
import styles from './styles.module.css';
import { PageCounter } from '../../shared/ui/page-counter/component';

type MoviesPageProps = {
	movies: ShortMovieInfo[];
	maxPageCount: number;
	currQuery: URLSearchParams;
	updateQuery: (key: string, value: string) => void;
};

export const MoviesPage = ({
	movies,
	maxPageCount,
	currQuery,
	updateQuery,
}: MoviesPageProps) => {
	return (
		<>
			<div className={styles.movieList}>
				{movies.length > 0 ? (
					movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
				) : (
					<div className={styles.notFound}>
						<p className={styles.textActive}>Фильмы не найдены</p>
						<p className={styles.textInactive}>
							Измените запрос и попробуйте снова
						</p>
					</div>
				)}
			</div>
			<PageCounter
				maxPageCount={maxPageCount}
				onChange={updateQuery}
				currPage={currQuery.has('page') ? Number(currQuery.get('page')) : 1}
			/>
		</>
	);
};
