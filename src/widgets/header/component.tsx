import { Button } from '../../shared/ui/button/component';
import styles from './styles.module.css';
import person_icon from '../../shared/images/person.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../shared/hooks/reduxHooks';
import { selectUserModule } from '../../redux/login/selectors';
import { userSliceActions } from '../../redux/login';

export const Header = () => {
	const { isAuthorized } = useAppSelector(selectUserModule);
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	return (
		<div className={styles.container}>
			<Link to='/' className={styles.link}>
				<h1>Фильмопоиск</h1>
			</Link>
			{isAuthorized ? (
				<div className={styles.iconAndButton}>
					<img
						src={person_icon}
						alt='Аватар пользователя'
						className={styles.icon}
					/>
					<Button
						onClick={() => {
							dispatch(userSliceActions.setIsAuthorized(false));
							localStorage.removeItem('token');
						}}
						style='secondary'
					>
						Выйти
					</Button>
				</div>
			) : (
				<Button
					onClick={() => {
						navigate('/login');
					}}
				>
					Войти
				</Button>
			)}
		</div>
	);
};
