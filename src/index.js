import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, combineReducers } from 'redux';
import PropTypes from 'prop-types';
import { Provider, connect } from 'react-redux';

import App from './components/App';
import todoApp from './reducers';

ReactDOM.render(
	<Provider store={createStore(todoApp)}>
		<App />
	</Provider>,
	document.getElementById('root')
);
