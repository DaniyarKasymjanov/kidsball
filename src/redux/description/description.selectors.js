import { createSelector } from 'reselect';

const selectDescription = (state) => state.description;

export const selectContentForPage = createSelector([ selectDescription ], (description) => description.content);
