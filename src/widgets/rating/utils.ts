import { RatingStatus } from './component';

export const updateStatus = (num: number, type: RatingStatus) => {
	const arr: RatingStatus[] = [];
	for (let i = 0; i < num; i++) {
		arr[i] = type;
	}
	if (num < 5) {
		for (let i = num; i < 5; i++) {
			arr[i] = 'default';
		}
	}

	return arr;
};
