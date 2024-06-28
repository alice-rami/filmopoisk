import { Actor } from '../../../../shared/types/types';
import styles from './styles.module.css';

export const ActorCard = ({ name, photo }: Actor) => {
	return (
		<div className={styles.container}>
			<img src={photo} alt={`${name}`} className={styles.photo} />
			<p>{name}</p>
		</div>
	);
};
