import { ShortMovieInfo } from '../../../../shared/types/types';
import { Rating } from '../../../../widgets/rating/component';
import styles from './styles.module.css';

type MovieDetailsProps = Omit<ShortMovieInfo, 'id'>;
export const MovieDetails = ({
	title,
	genre,
	release_year,
	rating,
	description,
}: MovieDetailsProps) => {
	return (
		<div className={styles.container}>
			<div className={styles.titleRating}>
				<h2>{title}</h2>
				<Rating value={Math.round(Number.parseFloat(rating))} />
			</div>
			<p>
				<span>Жанр: </span>
				{genre}
			</p>
			<p>
				<span>Год выпуска: </span>
				{release_year}
			</p>
			<p>
				<span>Рейтинг: </span>
				{Number.parseFloat(rating)}
			</p>
			<p>
				<span>Описание</span>
			</p>
			<p>{description}</p>
		</div>
	);
};
