import { Header } from '../header/component';
import styles from './styles.module.css';

type LayoutProps = {
	children?: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
	return (
		<div className={styles.container}>
			<Header />
			<main>{children}</main>
		</div>
	);
};
