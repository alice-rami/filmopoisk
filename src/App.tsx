import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFoundPage } from './pages/not-found-page/component';
import { Layout } from './widgets/layout/component';
import { Provider } from 'react-redux';
import { store } from './redux/index';
import { MovieContainer } from './pages/movie/container';
import { LoginPage } from './pages/login/component';
import { MovieSearchContainer } from './pages/movie-search/container';

export const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route index element={<MovieSearchContainer />} />
						<Route path='movie/:movieId' element={<MovieContainer />} />
						<Route path='login' element={<LoginPage />} />
						<Route path='*' element={<NotFoundPage />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</Provider>
	);
};
