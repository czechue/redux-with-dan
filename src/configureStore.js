import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import todoApp from './reducers';

const configureStore = () => {
	const middlewares = [thunk];
	
	if (process.env.NODE_ENV !== 'production') {
		middlewares.push(logger);
	}
	
	return createStore(
		todoApp,
		// persistedState, // if u want to specify or skip
		compose(
			applyMiddleware(...middlewares),
			window.devToolsExtension && window.devToolsExtension()
		)
	);
};

export default configureStore;
