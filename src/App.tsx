import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NotFoundPage } from './pages/not-found-page/component';
import { Layout } from './widgets/layout/component';
import { MoviePage } from './pages/movie/component';
import { MoviesPage } from './pages/movies/component';
import { movie } from './shared/mock';

export const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route
						index
						element={<MoviesPage movies={[movie, movie, movie]} />}
					/>
					<Route path='/movie:id' element={<MoviePage />} />
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
};
