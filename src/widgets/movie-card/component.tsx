import { useNavigate } from 'react-router-dom';
import { ShortMovieInfo } from '../../shared/types/types';
import { Rating } from '../rating/component';
import styles from './styles.module.css';
import { useAppSelector } from '../../shared/hooks/reduxHooks';
import { selectUserModule } from '../../redux/login/selectors';

type MovieCardProps = {
	movie: ShortMovieInfo;
};

export const MovieCard = ({ movie }: MovieCardProps) => {
	const navigate = useNavigate();
	const { isAuthorized } = useAppSelector(selectUserModule);
	if (!movie) {
		return null;
	}
	const { id, title, description, release_year, genre, poster } = movie;
	return (
		<article
			className={styles.container}
			onClick={() => navigate(`/movie/${id}`)}
		>
			<img src={poster} alt='Постер' className={styles.image} />
			<div className={styles.details}>
				<h2 className={styles.title}>{title}</h2>
				<p className={styles.genreKey}>Жанр</p>
				<p className={styles.genreValue}>{genre}</p>
				<p className={styles.yearKey}>Год выпуска</p>
				<p>{release_year}</p>
				<p className={styles.descriptionKey}>Описание</p>
				<p className={styles.descriptionValue}>{description}</p>
			</div>
			{isAuthorized && <Rating movieId={id} />}
		</article>
	);
};
