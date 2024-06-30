import { ReactNode, useEffect } from 'react';
import { Overlay } from '../overlay/component';
import ReactDOM from 'react-dom';
import styles from './styles.module.css';

interface ModalProps {
	children: ReactNode;
	onClick: () => void;
}
export const Modal = ({ children, onClick }: ModalProps) => {
	const modalRoot = document.getElementById('modal');

	useEffect(() => {
		const onEsc = (evt: KeyboardEvent) => {
			if (evt.key === 'Escape') {
				onClick();
			}
		};
		document.addEventListener('keydown', onEsc);
		return () => document.removeEventListener('keydown', onEsc);
	}, [onClick]);

	if (!modalRoot) {
		return null;
	}

	return ReactDOM.createPortal(
		<>
			<div className={styles.container}>
				<button className={styles.modalClose} onClick={onClick}>
					Закрыть
				</button>
				{children}
			</div>
			<Overlay onClick={onClick} />
		</>,
		modalRoot
	);
};
