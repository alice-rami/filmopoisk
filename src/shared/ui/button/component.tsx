import classNames from 'classnames';
import styles from './styles.module.css';

type ButtonProps = {
	children: React.ReactNode;
	onClick: () => void;
	className?: string;
	type?: 'primary' | 'secondary';
};

export const Button = ({
	children,
	onClick,
	className,
	type = 'primary',
}: ButtonProps) => {
	return (
		<button
			className={classNames(className, styles.root, styles[type])}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
