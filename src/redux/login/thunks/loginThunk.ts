import { createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../../utils';

type UserData = {
	username: string;
	password: string;
};

type LoginResponse = {
	token: string;
};

const login = ({ username, password }: UserData): Promise<LoginResponse> => {
	const token = localStorage.getItem('token');
	return request('login', {
		headers: {
			'Content-Type': 'application/json',
			authorization: token || '',
		},
		method: 'POST',
		body: JSON.stringify({
			username,
			password,
		}),
	});
};

export const loginThunk = createAsyncThunk(
	'user/login',
	async ({ username, password }: UserData) => {
		try {
			const result = await login({ username, password });
			localStorage.setItem('token', result.token);
			return result;
		} catch (error) {
			console.log(error);
		}
	}
);
