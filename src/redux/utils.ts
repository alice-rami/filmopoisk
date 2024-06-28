export const BASE_URL = 'http://localhost:3030/api/v1';

const checkResponse = async (res: Response) => {
	if (res.ok) {
		return res.json();
	}
	const err = await res.json();
	return Promise.reject(err);
};

export const request = async (endpoint: string, options?: RequestInit) => {
	const res = await fetch(`${BASE_URL}/${endpoint}`, options);
	return checkResponse(res);
};
