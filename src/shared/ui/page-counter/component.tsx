import classNames from 'classnames';
import styles from './styles.module.css';

type PageCounterProps = {
	currPage: number;
	maxPageCount?: number;
	onChange: (key: string, value: string) => void;
};

export const PageCounter = ({
	currPage,
	maxPageCount = 1,
	onChange,
}: PageCounterProps) => {
	return (
		<div className={styles.container}>
			<button
				onClick={() => onChange('page', `${currPage - 1 || 1}`)}
				disabled={currPage === 1}
				className={classNames(styles.icon, styles.iconLeft, {
					[styles.disabled]: currPage < 2,
				})}
			/>
			<span className={styles.value}>{currPage}</span>
			<button
				className={classNames(styles.icon, {
					[styles.disabled]: currPage >= maxPageCount,
				})}
				onClick={() =>
					onChange(
						'page',
						`${currPage < maxPageCount ? currPage + 1 : maxPageCount}`
					)
				}
			/>
		</div>
	);
};
