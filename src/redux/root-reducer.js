import { combineReducers } from 'redux';

import directoryReducer from './directory/directory.reducer';
import bannerReducer from './banner/banner.reducer';
import descriptionReducer from './description/description.reducer';
import coachReducer from './coaches/coaches.reducer';

export default combineReducers({
	directory: directoryReducer,
	banner: bannerReducer,
	description: descriptionReducer,
	coach: coachReducer
});
