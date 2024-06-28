import { configureStore } from '@reduxjs/toolkit';
import { userQuerySlice } from './ui/user-query';
import { api } from './api';
import { userSlice } from './login';
import { modalSlice } from './ui/modal';

export const store = configureStore({
	reducer: {
		userQuery: userQuerySlice.reducer,
		user: userSlice.reducer,
		modal: modalSlice.reducer,
		[api.reducerPath]: api.reducer,
	},
	devTools: true,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
