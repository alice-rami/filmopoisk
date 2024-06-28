import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginThunk } from '../../../redux/login/thunks/loginThunk';

type InitialState = {
	isVisible: boolean;
};

const initialState: InitialState = {
	isVisible: false,
};

export const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		setVisibility: (state, { payload }: PayloadAction<boolean>) => {
			state.isVisible = payload;
		},
	},
});

export const modalActions = modalSlice.actions;
