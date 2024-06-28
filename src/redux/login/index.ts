import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginThunk } from './thunks/loginThunk';

type InitialState = {
	isAuthChecked: boolean;
	isAuthorized: boolean;
};

const initialState: InitialState = {
	isAuthChecked: false,
	isAuthorized: false,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setIsAuthorized: (state, { payload }: PayloadAction<boolean>) => {
			state.isAuthorized = payload;
		},
		setIsAuthChecked: (state, { payload }: PayloadAction<boolean>) => {
			state.isAuthChecked = payload;
		},
	},
	extraReducers(builder) {
		builder.addCase(loginThunk.fulfilled, (state) => {
			state.isAuthChecked = true;
			state.isAuthorized = true;
		});
	},
});

export const userSliceActions = userSlice.actions;
