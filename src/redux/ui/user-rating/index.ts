import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = Record<string, number>;

const initialState: InitialState = {};

export const userRatingSlice = createSlice({
	name: 'userRating',
	initialState,
	reducers: {
		setRating(
			state,
			{ payload }: PayloadAction<{ id: string; value: number }>
		) {
			state[payload.id] = payload.value;
		},
	},
});

export const userRatingActions = userRatingSlice.actions;
