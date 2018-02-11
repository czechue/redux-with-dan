import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux'

// it doesn't work in 1-14 yet
// so don't boter to npm start it 

const todo = (state, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				id: action.id,
				text: action.text,
				completed: false
			}
		case 'TOGGLE_TODO':
			if (state.id != action.id) {
				return state
			} else {
				return {
					...state,
					completed: !action.completed
				}
			}
	}
}

const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				todo(undefined, action)
			];
		case 'TOGGLE_TODO':
			return state.map(t => todo(t, action))

		default:
			return state;
	}
};

const visibilityFilter = (
	state = 'SHOW_ALL',
	action
) => {
	switch (action.type) {
		case 'SET_VISIBILITY_FILTER':
			return action.filter
		default:
			return state;
	}
}

// reducer composition pattern
const todoApp = (state = {}, action) => {
	return {
		todos: todos(
			state.todos,
			action
		),
		visibilityFilter: visibilityFilter(
			state.visibilityFilter,
			action
		)
	}
}

const store = createStore(todoApp)
