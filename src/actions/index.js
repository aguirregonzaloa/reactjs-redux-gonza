// Actions
import nodeserver from '../apis/nodeserver';


export const fetchArticles = () => async dispatch => {
	const response = await nodeserver.get('/api/articles');

	dispatch({type: 'FETCH_ARTICLES', payload: response.data});
}

export const createArticle = (formValues) => async dispatch => {
	const response = await nodeserver.post('/api/articles', formValues);

	dispatch({type:'CREATE_ARTICLE', payload:response.data});
}
