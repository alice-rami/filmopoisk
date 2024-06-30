import { memo, useEffect, useState } from 'react';
import styles from './styles.module.css';

type SearchInputProps = {
	onChange: (key: string, value: string) => void;
	currTitle?: string | null;
};

export const SearchInput = memo(function SearchInput({
	onChange,
	currTitle,
}: SearchInputProps) {
	const [searchValue, setSearchValue] = useState(currTitle || '');
	const [deboucedValue, setDebouncedValue] = useState(currTitle || '');

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(searchValue);
		}, 1000);

		return () => {
			clearTimeout(handler);
		};
	}, [searchValue]);

	useEffect(() => {
		onChange('title', searchValue);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [deboucedValue]);

	return (
		<div className={styles.container}>
			<span className={styles.searchIcon} />
			<input
				type='search'
				placeholder='Введите название'
				onChange={(e) => {
					setSearchValue(e.target.value || '');
				}}
				value={searchValue || ''}
			/>
			{searchValue && searchValue.length > 0 && (
				<span
					className={styles.closeIcon}
					onClick={() => {
						setSearchValue('');
					}}
				/>
			)}
		</div>
	);
});
