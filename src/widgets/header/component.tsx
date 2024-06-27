import { Button } from '../../shared/ui/button/component';
import styles from './styles.module.css';
import person_icon from '../../shared/images/person.svg';

export const Header = () => {
	const isAuthorised = true;
	return (
		<div className={styles.container}>
			<h1>Фильмопоиск</h1>
			{isAuthorised ? (
				<div className={styles.iconAndButton}>
					<img
						src={person_icon}
						alt='Аватар пользователя'
						className={styles.icon}
					/>
					<Button
						onClick={() => {
							console.log('Выход');
						}}
						type='secondary'
					>
						Выйти
					</Button>
				</div>
			) : (
				<Button
					onClick={() => {
						console.log('Вход');
					}}
				>
					Войти
				</Button>
			)}
		</div>
	);
};
