import { useState } from 'react';
import styles from './styles.module.css';
import { Input } from '../../shared/ui/input/component';
import { Button } from '../../shared/ui/button/component';
import { Modal } from '../../shared/ui/modal/component';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../shared/hooks/reduxHooks';
import { loginThunk } from '../../redux/login/thunks/loginThunk';
import { modalActions } from '../../redux/ui/modal';

type LoginData = {
	login: string | null;
	password: string | null;
};

export const LoginPage = () => {
	const [loginData, setLoginData] = useState<LoginData>({
		login: null,
		password: null,
	});
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	return (
		<Modal
			onClick={() => {
				navigate(-1);
				dispatch(modalActions.setVisibility(false));
			}}
		>
			<form
				className={styles.container}
				onSubmit={(event) => {
					event.preventDefault();
					const { login, password } = loginData;
					if (login && password) {
						dispatch(loginThunk({ username: login, password }))
							.then(() => {
								navigate(-1);
								dispatch(modalActions.setVisibility(false));
							})
							.catch((error) => {
								console.log(error);
							});
					}
				}}
			>
				<h2>Авторизация</h2>
				<Input
					id='name'
					type='text'
					label='Логин'
					value={loginData.login || ''}
					onChange={(event) => {
						setLoginData({ ...loginData, login: event.target.value });
					}}
					required={true}
				/>
				<Input
					id='password'
					type='password'
					label='Пароль'
					value={loginData.password || ''}
					onChange={(event) => {
						setLoginData({ ...loginData, password: event.target.value });
					}}
					required={true}
				/>
				<div className={styles.buttonContainer}>
					<Button type='submit'>Войти</Button>
					<Button
						onClick={() => {
							navigate(-1);
							dispatch(modalActions.setVisibility(false));
						}}
						type='reset'
						style='secondary'
					>
						Отменить
					</Button>
				</div>
			</form>
		</Modal>
	);
};
