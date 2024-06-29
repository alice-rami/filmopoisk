import classNames from 'classnames';
import { Button } from '../button/component';
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
			<Button
				onClick={() => onChange('page', `${currPage - 1 || 1}`)}
				disabled={currPage >= maxPageCount}
			>
				<span
					className={classNames({
						[styles.disabled]: currPage === 1,
					})}
				>
					prev
				</span>
			</Button>
			<span className={styles.value}>{currPage}</span>
			<Button
				onClick={() =>
					onChange(
						'page',
						`${currPage < maxPageCount ? currPage + 1 : maxPageCount}`
					)
				}
				disabled={currPage >= maxPageCount}
			>
				<span
					className={classNames({
						[styles.disabled]: currPage === maxPageCount,
					})}
				>
					next
				</span>
			</Button>
		</div>
	);
};
