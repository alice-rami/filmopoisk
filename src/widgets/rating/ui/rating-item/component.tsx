import classNames from 'classnames';
import styles from './styles.module.css';

type RatingItemProps = {
	num: number | null;
	type: 'default' | 'selected' | 'hovered';
	setHover: React.Dispatch<
		React.SetStateAction<{
			isHovered: boolean;
			value?: number;
		}>
	>;
	onClick: (num: number) => void;
};

export const RatingItem = ({
	num,
	type,
	setHover,
	onClick,
}: RatingItemProps) => {
	if (!num) {
		return null;
	}
	return (
		<button
			className={styles.container}
			onClick={() => {
				onClick(num);
			}}
			onMouseOver={() => setHover({ isHovered: true, value: num })}
			onMouseOut={() => setHover({ isHovered: false })}
		>
			<svg
				width='16'
				height='16'
				viewBox='0 0 32 32'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M23.5467 30.2267C22.84 30.2267 21.9333 30 20.8 29.3333L16.8133 26.9733C16.4 26.7333 15.6 26.7333 15.2 26.9733L11.2 29.3333C8.83999 30.7333 7.45333 30.1733 6.82666 29.72C6.21333 29.2667 5.25333 28.1067 5.87999 25.44L6.82666 21.3467C6.93333 20.92 6.71999 20.1867 6.39999 19.8667L3.09333 16.56C1.43999 14.9067 1.57333 13.4933 1.79999 12.8C2.02666 12.1067 2.74666 10.88 5.03999 10.4933L9.29333 9.78668C9.69333 9.72001 10.2667 9.29334 10.44 8.93334L12.8 4.22668C13.8667 2.08001 15.2667 1.76001 16 1.76001C16.7333 1.76001 18.1333 2.08001 19.2 4.22668L21.5467 8.92001C21.7333 9.28001 22.3067 9.70668 22.7067 9.77334L26.96 10.48C29.2667 10.8667 29.9867 12.0933 30.2 12.7867C30.4133 13.48 30.5467 14.8933 28.9067 16.5467L25.6 19.8667C25.28 20.1867 25.08 20.9067 25.1733 21.3467L26.12 25.44C26.7333 28.1067 25.7867 29.2667 25.1733 29.72C24.84 29.96 24.3067 30.2267 23.5467 30.2267Z'
					className={styles[type]}
				/>
			</svg>
			<div
				className={classNames(styles.number, {
					[styles.numberInactive]: type !== 'selected',
				})}
			>
				{num}
			</div>
		</button>
	);
};
