import { ChangeEvent } from 'react';
import { Select } from '../../shared/ui/select/component';
import { GENRES, GenresEn, YearKeys, YEARS } from './config';
import styles from './styles.module.css';

type FilterProps = {
	onChange: (key: string, value: string) => void;
	currGenre?: GenresEn | null;
	currYear?: YearKeys | null;
};

export const Filter = ({ onChange, currGenre, currYear }: FilterProps) => {
	return (
		<div className={styles.container}>
			<h3 className={styles.title}>Фильтр</h3>
			<Select
				id='genre'
				name='genre'
				title='Жанр'
				values={GENRES}
				currentValue={currGenre}
				onChange={(event: ChangeEvent<HTMLSelectElement>) => {
					const genre = event.target?.value;
					onChange('genre', genre !== undefined && genre !== '0' ? genre : '');
				}}
			/>
			<Select
				id='release_year'
				name='release_year'
				title='Год выпуска'
				values={YEARS}
				currentValue={currYear}
				onChange={(event: ChangeEvent<HTMLSelectElement>) => {
					const year = event.target?.value;
					onChange(
						'release_year',
						year !== undefined && year !== '0' ? year : ''
					);
				}}
			/>
		</div>
	);
};
