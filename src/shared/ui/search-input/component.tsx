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
			<span>
				<svg
					width='16'
					height='16'
					viewBox='0 0 16 16'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M0.833374 7.66671C0.833374 11.4334 3.90004 14.5 7.66671 14.5C11.4334 14.5 14.5 11.4334 14.5 7.66671C14.5 3.90004 11.4334 0.833374 7.66671 0.833374C3.90004 0.833374 0.833374 3.90004 0.833374 7.66671ZM1.83337 7.66671C1.83337 4.45337 4.44671 1.83337 7.66671 1.83337C10.8867 1.83337 13.5 4.45337 13.5 7.66671C13.5 10.88 10.8867 13.5 7.66671 13.5C4.44671 13.5 1.83337 10.88 1.83337 7.66671ZM14.3134 15.02C14.4134 15.12 14.54 15.1666 14.6667 15.1666C14.7934 15.1666 14.92 15.12 15.02 15.02C15.2134 14.8266 15.2134 14.5066 15.02 14.3133L13.6867 12.98C13.4934 12.7866 13.1734 12.7866 12.98 12.98C12.7867 13.1733 12.7867 13.4933 12.98 13.6866L14.3134 15.02Z'
						fill='#999FA6'
					/>
				</svg>
			</span>
			<input
				type='search'
				placeholder='Введите название'
				onChange={(e) => {
					setSearchValue(e.target.value || '');
				}}
				value={searchValue || ''}
			/>
		</div>
	);
});
