import { useNavigate } from 'react-router-dom';
import { ShortMovieInfo } from '../../shared/types/types';
import { Rating } from '../rating/component';
import styles from './styles.module.css';

type MovieCardProps = {
	movie: ShortMovieInfo;
};

export const MovieCard = ({ movie }: MovieCardProps) => {
	const navigate = useNavigate();
	if (!movie) {
		return null;
	}
	const { id, title, description, rating, release_year, genre, poster } = movie;
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
			<Rating value={Math.round(Number.parseFloat(rating))} />
		</article>
	);
};
