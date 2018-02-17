import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Root from './components/Root'
import './index.css';
import configureStore from './configureStore'

const store = configureStore()

ReactDOM.render(
	<Root store={store} />,
	document.getElementById('root')
);
