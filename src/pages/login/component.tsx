import { useState } from 'react';
import styles from './styles.module.css';
import { Input } from '../../shared/ui/input/component';
import { Button } from '../../shared/ui/button/component';

type LoginData = {
	login: string | null;
	password: string | null;
};

export const LoginPage = () => {
	const [loginData, setLoginData] = useState<LoginData>({
		login: null,
		password: null,
	});
	return (
		<form className={styles.container}>
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
				<Button
					onClick={() => {
						console.log('Войти');
					}}
				>
					Войти
				</Button>
				<Button
					onClick={() => {
						console.log('Отменить');
					}}
					type='secondary'
				>
					Отменить
				</Button>
			</div>
		</form>
	);
};
