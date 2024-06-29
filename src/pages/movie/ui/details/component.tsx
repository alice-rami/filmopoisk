import { useAppSelector } from '../../../../shared/hooks/reduxHooks';
import { ShortMovieInfo } from '../../../../shared/types/types';
import { Rating } from '../../../../widgets/rating/component';
import styles from './styles.module.css';
import { selectUserModule } from '../../../../redux/login/selectors';

export const MovieDetails = ({
	id,
	title,
	genre,
	release_year,
	rating,
	description,
}: ShortMovieInfo) => {
	const { isAuthorized } = useAppSelector(selectUserModule);
	return (
		<div className={styles.container}>
			<div className={styles.titleRating}>
				<h2>{title}</h2>
				{isAuthorized && <Rating movieId={id} />}
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
