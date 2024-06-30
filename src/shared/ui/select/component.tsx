import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';
import classNames from 'classnames';

type SelectProps = {
	title: string;
	values: Record<string, string>;
	currentValue?: string | null;
	onChange: (value: string) => void;
};

export const Select = ({
	title,
	values,
	currentValue,
	onChange,
}: SelectProps) => {
	const [selectedValue, setSelectedValue] = useState(
		currentValue ? values[currentValue] : currentValue
	);
	const [isVisible, setIsVisible] = useState(false);
	const filterRef = useRef(null);

	useEffect(() => {
		const onEsc = (evt: KeyboardEvent) => {
			if (evt.key === 'Escape') {
				setIsVisible(false);
			}
		};
		const onClick = (evt: Event) => {
			evt.stopPropagation();
			console.log('click');
			if (isVisible) {
				setIsVisible(false);
			}
		};
		document.addEventListener('click', onClick);
		document.addEventListener('keydown', onEsc);
		return () => {
			document.removeEventListener('keydown', onEsc);
			document.removeEventListener('click', onClick);
		};
	}, [isVisible]);

	return (
		<div className={styles.container} ref={filterRef.current}>
			<h3 className={styles.title}>{title}</h3>
			<div className={styles.selectWrapper}>
				<div
					className={classNames(styles.select, {
						[styles.active]: isVisible,
					})}
					onClick={(evt) => {
						evt.stopPropagation();
						setIsVisible(!isVisible);
					}}
				>
					{!currentValue
						? `Выберите ${title.split(' ')[0].toLocaleLowerCase()}`
						: values[currentValue]}
					<span
						className={classNames(styles.arrow, {
							[styles.upArrow]: isVisible,
						})}
					></span>
				</div>
				{isVisible && (
					<div className={styles.options}>
						{Object.entries(values).map(([key, value], index) => (
							<div
								key={index}
								className={classNames(styles.option, {
									[styles.selected]: key === selectedValue,
								})}
								onClick={(evt) => {
									evt.stopPropagation();
									setSelectedValue(value);
									onChange(key);
									setIsVisible(false);
								}}
							>
								{value}
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};
