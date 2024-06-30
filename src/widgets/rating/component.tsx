import { useEffect, useState } from 'react';
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
	const [newValue, setNewValue] = useState(userRating);
	const [deboucedValue, setDebouncedValue] = useState(userRating);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(newValue);
		}, 1000);

		return () => {
			clearTimeout(handler);
		};
	}, [newValue]);

	useEffect(() => {
		if (newValue) {
			dispatch(userRatingActions.setRating({ id: movieId, value: newValue }));
			rateMovie({ movieId: movieId, user_rate: newValue });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [deboucedValue]);

	return (
		<div
			className={styles.container}
			onClick={(evt) => {
				evt.stopPropagation();
			}}
		>
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
						setNewValue(ratingValue);
					}}
				/>
			))}
		</div>
	);
};
