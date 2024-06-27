import { useState } from 'react';
import { RatingItem } from './ui/rating-item/component';
import styles from './styles.module.css';
import { updateStatus } from './utils';

type RatingProps = {
	value: number;
};
export type RatingStatus = 'default' | 'hovered' | 'selected';

export const Rating = ({ value = 0 }: RatingProps) => {
	const [hover, setHover] = useState<{ isHovered: boolean; value?: number }>({
		isHovered: false,
	});

	return (
		<div className={styles.container}>
			{(hover.isHovered
				? updateStatus(hover.value || 0, 'hovered')
				: updateStatus(value, 'selected')
			).map((item, index) => (
				<RatingItem
					key={index}
					type={item}
					num={index + 1}
					setHover={setHover}
				/>
			))}
		</div>
	);
};
