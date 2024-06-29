import { ChangeEvent } from 'react';
import styles from './styles.module.css';

type SelectProps = {
	name: string;
	id: string;
	title: string;
	values: Record<string, string>;
	currentValue?: string | null;
	onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
};

export const Select = ({
	name,
	id,
	title,
	values,
	currentValue = 'DEFAULT',
	onChange,
}: SelectProps) => {
	console.log(currentValue);
	return (
		<>
			<label htmlFor={id}>{title}</label>
			<div className={styles.selectWrapper}>
				<select
					name={name}
					id={id}
					defaultValue={currentValue || 'DEFAULT'}
					className={styles.select}
					onChange={onChange}
				>
					<option value='DEFAULT' disabled>
						{`Выберите ${title.split(' ')[0].toLocaleLowerCase()}`}
					</option>
					{Object.entries(values).map(([key, value], index) => (
						<option key={index} value={key} selected={currentValue === key}>
							{value}
						</option>
					))}
				</select>
			</div>
		</>
	);
};
