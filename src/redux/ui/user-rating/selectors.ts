import { RootState } from '../../../redux';

export const selectUserRatingModule = (state: RootState) => state.userRating;
export const selectMovieRatingById = (state: RootState, id: string) =>
	selectUserRatingModule(state)[id];
