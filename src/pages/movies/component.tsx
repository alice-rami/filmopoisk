import { MovieCard } from '../../widgets/movie-card/component';
import { SearchInput } from '../../shared/ui/search-input/component';
import { ShortMovieInfo } from '../../shared/types/types';
import styles from './styles.module.css';
import { Filter } from '../../widgets/filter/component';
import { PageCounter } from '../../shared/ui/counter/component';
import { GenresEn, YearKeys } from '../../widgets/filter/config';

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
		<div className={styles.container}>
			<Filter
				onChange={updateQuery}
				currGenre={currQuery.get('genre') as GenresEn | null}
				currYear={currQuery.get('release_year') as YearKeys | null}
			/>
			<div className={styles.innerContainer}>
				<SearchInput
					onChange={updateQuery}
					currTitle={currQuery.has('title') ? currQuery.get('title') : ''}
				/>
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
			</div>
		</div>
	);
};
