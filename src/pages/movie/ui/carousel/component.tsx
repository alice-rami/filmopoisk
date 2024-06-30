import { Actor } from 'src/shared/types/types';
import { ActorCard } from '../actor/component';
import styles from './styles.module.css';
import classNames from 'classnames';
import { useRef } from 'react';

type ActorCarouselProps = {
	actors: Actor[];
};
export const ActorCarousel = ({ actors }: ActorCarouselProps) => {
	const carouselRef = useRef<HTMLDivElement>(null);
	const scrollAmount = 320;

	return (
		<div className={styles.container}>
			<button
				className={classNames(styles.iconLeft, styles.icon)}
				onClick={() => {
					const container = carouselRef.current;
					if (container) {
						container.scrollLeft -= scrollAmount;
					}
				}}
			/>
			<div className={styles.actors} ref={carouselRef}>
				{actors.map((actor, index) => (
					<ActorCard actor={actor} key={index} className={styles.actor} />
				))}
			</div>
			<button
				className={classNames(styles.iconRight, styles.icon)}
				onClick={() => {
					const container = carouselRef.current;
					if (container) {
						container.scrollLeft += scrollAmount;
					}
				}}
			/>
		</div>
	);
};
