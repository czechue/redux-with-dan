import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, combineReducers } from 'redux';
import PropTypes from 'prop-types';
import { Provider, connect } from 'react-redux';

import App from './components/App';
import todoApp from './reducers';

// const persistedState = {
// 	todos: [{
// 		id: '0',
// 		text: 'wewew',
// 		completed: false,
// 	}]
// }

const store = createStore(
	todoApp,
	// persistedState
) 
console.log(store.getState())

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
