import classNames from 'classnames';
import styles from './styles.module.css';

type ButtonProps = {
	children: React.ReactNode;
	onClick?: () => void;
	className?: string;
	style?: 'primary' | 'secondary';
	type?: 'submit' | 'button' | 'reset';
	disabled?: boolean;
};

export const Button = ({
	children,
	onClick,
	className,
	style = 'primary',
	type = 'button',
	disabled = false,
}: ButtonProps) => {
	return (
		<button
			className={classNames(className, styles.root, styles[style])}
			onClick={onClick}
			type={type}
			disabled={disabled}
		>
			{children}
		</button>
	);
};
