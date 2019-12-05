import { createSelector } from 'reselect';

const selectCoach = (state) => state.coach;

export const selectCoachesForPage = createSelector([ selectCoach ], (coaches) => coaches.coaches);
