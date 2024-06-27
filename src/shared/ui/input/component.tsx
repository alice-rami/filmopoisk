import styles from './styles.module.css';

type InputProps = {
	id: string;
	label: string;
	type: 'text' | 'password';
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	value?: string;
	required?: boolean;
};

export const Input = ({
	id,
	label,
	type,
	onChange,
	value = '',
	required = false,
}: InputProps) => {
	return (
		<div className={styles.inputContainer}>
			<label htmlFor={id}>
				{label}
				{required && <span className={styles.required}> *</span>}
			</label>
			<input
				id={id}
				type={type}
				value={value}
				onChange={onChange}
				required={required}
				className={styles.input}
				placeholder={`Введите ${label.toLocaleLowerCase()}`}
			/>
		</div>
	);
};
