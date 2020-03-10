//reducers
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import articlesReducer from './articlesReducer'

export default combineReducers({
	articles: articlesReducer,
	form: formReducer
});

