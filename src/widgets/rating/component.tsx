import { useState } from 'react';
import { RatingItem } from './ui/rating-item/component';
import styles from './styles.module.css';
import { updateStatus } from './utils';
import { useAppDispatch, useAppSelector } from '../../shared/hooks/reduxHooks';
import { selectMovieRatingById } from '../../redux/ui/user-rating/selectors';
import { userRatingActions } from '../../redux/ui/user-rating';
import { useRateMovieMutation } from '../../redux/api';

type RatingProps = {
	movieId: string;
};
export type RatingStatus = 'default' | 'hovered' | 'selected';

export const Rating = ({ movieId }: RatingProps) => {
	const dispatch = useAppDispatch();
	const [rateMovie] = useRateMovieMutation();
	const userRating = useAppSelector((state) =>
		selectMovieRatingById(state, movieId)
	);
	const [hover, setHover] = useState<{ isHovered: boolean; value?: number }>({
		isHovered: false,
	});

	return (
		<div className={styles.container}>
			{(hover.isHovered
				? updateStatus(hover.value || 0, 'hovered')
				: updateStatus(userRating || 0, 'selected')
			).map((item, index) => (
				<RatingItem
					key={index}
					type={item}
					num={index + 1}
					setHover={setHover}
					onClick={(ratingValue: number) => {
						dispatch(
							userRatingActions.setRating({ id: movieId, value: ratingValue })
						);
						rateMovie({ movieId: movieId, user_rate: ratingValue });
					}}
				/>
			))}
		</div>
	);
};
