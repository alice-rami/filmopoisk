import classNames from 'classnames';
import { Actor } from '../../../../shared/types/types';
import styles from './styles.module.css';

type ActorCardProps = {
	actor: Actor;
	className?: string;
};

export const ActorCard = ({ actor, className }: ActorCardProps) => {
	const { name, photo } = actor;
	return (
		<div className={classNames(styles.container, className)}>
			<img src={photo} alt={`${name}`} className={styles.photo} />
			<p>{name}</p>
		</div>
	);
};
