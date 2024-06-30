import { SearchInput } from '../../shared/ui/search-input/component';
import styles from './styles.module.css';
import { Filter } from '../../widgets/filter/component';
import { GenresEn, YearKeys } from '../../widgets/filter/config';
import { MoviesContainer } from '../movies/container';

type MovieSearchPageProps = {
	currQuery: URLSearchParams;
	updateQuery: (key: string, value: string) => void;
};

export const MovieSearchPage = ({
	currQuery,
	updateQuery,
}: MovieSearchPageProps) => {
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
				<MoviesContainer currQuery={currQuery} updateQuery={updateQuery} />
			</div>
		</div>
	);
};
