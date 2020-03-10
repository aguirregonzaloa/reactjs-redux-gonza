
import _ from 'lodash';

export default  ( state={}, action) => {

	switch(action.type){
		case 'FETCH_ARTICLES':
			return {...state, ..._.mapKeys(action.payload,'_id')};
		case 'CREATE_ARTICLE':
			return {...state, [action.payload._id]: action.payload};
		case 'EDIT_ARTICLE':
			return {...state, [action.payload._id]: action.payload};
		case 'FETCH_ARTICLE':
			return {...state, [action.payload._id]: action.payload};
		case 'DELETE_ARTICLE':
			return _.omit(state, action.payload);
		default:
			return state;
	}

}