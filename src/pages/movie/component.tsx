import { FullMovieInfo } from '../../shared/types/types';
import styles from './style.module.css';
import { ActorCard } from './ui/actor/component';
import { MovieDetails } from './ui/details/component';

type MoviePageProps = {
	movie: FullMovieInfo;
};

export const MoviePage = ({ movie }: MoviePageProps) => {
	const {
		id,
		title,
		description,
		release_year,
		poster,
		genre,
		rating,
		actors,
	} = movie;
	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<img src={poster} alt='Постер' className={styles.poster} />
				<MovieDetails
					id={id}
					title={title}
					description={description}
					release_year={release_year}
					genre={genre}
					rating={rating}
					poster={poster}
				/>
			</div>
			<h3>Актёры</h3>
			<div className={styles.actors}>
				{actors.map(({ name, photo }, index) => (
					<ActorCard name={name} photo={photo} key={index} />
				))}
			</div>
		</div>
	);
};
