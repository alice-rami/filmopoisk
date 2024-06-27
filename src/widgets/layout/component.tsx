import { LoginPage } from '../../pages/login/component';
import { Header } from '../header/component';
import { Modal } from '../../shared/ui/modal/component';
import styles from './styles.module.css';

type LayoutProps = {
	children?: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
	return (
		<div className={styles.container}>
			<Header />
			{false && (
				<Modal
					onClick={() => {
						console.log('Hello');
					}}
				>
					<LoginPage />
				</Modal>
			)}
			<main>{children}</main>
		</div>
	);
};
