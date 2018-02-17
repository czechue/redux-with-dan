import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import throttle from 'lodash.throttle';
import './index.css';
import { createStore, combineReducers } from 'redux';
import PropTypes from 'prop-types';
import { Provider, connect } from 'react-redux';
import { loadState, saveState } from './localStorage';

import App from './components/App';
import todoApp from './reducers';

const persistedState = loadState()

const store = createStore(
	todoApp,
	persistedState
) 

store.subscribe(throttle(() => {
	saveState({
		todos: store.getState().todos
	})
}, 1000))

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
