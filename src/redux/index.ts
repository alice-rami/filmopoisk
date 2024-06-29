import { configureStore } from '@reduxjs/toolkit';
import { api } from './api';
import { userSlice } from './login';
import { modalSlice } from './ui/modal';
import { userRatingSlice } from './ui/user-rating';

export const store = configureStore({
	reducer: {
		user: userSlice.reducer,
		modal: modalSlice.reducer,
		userRating: userRatingSlice.reducer,
		[api.reducerPath]: api.reducer,
	},
	devTools: true,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
