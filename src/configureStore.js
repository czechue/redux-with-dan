import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import todoApp from './reducers';

const thunk = (store) => (next) => (action) => 
	typeof action === 'function' ?
		action(store.dispatch) :
		next(action);

const configureStore = () => {
	const middlewares = [thunk];
	
	if (process.env.NODE_ENV !== 'production') {
		middlewares.push(logger);
	}
	
	return createStore(
		todoApp,
		// persistedState, // if u want to specify or skip
		applyMiddleware(...middlewares) // enhancer
	);
};

export default configureStore;
