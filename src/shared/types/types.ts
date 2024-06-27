export const GENRES = {
	'0': 'Не выбран',
	comedy: 'Комедия',
	drama: 'Драма',
	action: 'Боевик',
	thriller: 'Триллер',
	horror: 'Ужасы',
	family: 'Семейный',
	cartoon: 'Анимированный',
	fantasy: 'Фэнтези',
	romance: 'Романтика',
	adventure: 'Приключения',
	musical: 'Мьюзикл',
	war: 'Военный',
} as const;

export const YEARS = {
	'0': 'Не выбран',
	'2009': '2009',
	'2008': '2008',
	'2007': '2007',
	'2006': '2006',
	'1990-2005': '1990-2005',
	'1950-1989': '1950-1989',
} as const;

export type GenresEn = keyof typeof GENRES;
export type GenresRu = (typeof GENRES)[GenresEn];
export type YearKeys = keyof typeof YEARS;
export type YearValues = (typeof YEARS)[YearKeys];

export type Actor = {
	name: string;
	photo: string; // base64 img
};

export type FullMovieInfo = {
	id: string;
	title: string;
	description: string;
	release_year: number;
	poster: string; //base64 img
	genre: string;
	rating: string; //float
	total_rates_count: string; //int
	actors: Actor[];
};

export type ShortMovieInfo = Omit<
	FullMovieInfo,
	'actors' | 'total_rates_count'
>;
