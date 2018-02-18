import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import logger from 'redux-logger';
import todoApp from './reducers';

const configureStore = () => {
	const middlewares = [promise];
	
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
