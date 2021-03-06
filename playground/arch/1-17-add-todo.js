import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, combineReducers } from 'redux';

// it doesn't work in 1-14 yet
// so don't boter to npm start it

const todo = (state, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				id: action.id,
				text: action.text,
				completed: false
			};
		case 'TOGGLE_TODO':
			if (state.id != action.id) {
				return state;
			} else {
				return {
					...state,
					completed: !action.completed
				};
			}
	}
};

const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [ ...state, todo(undefined, action) ];
		case 'TOGGLE_TODO':
			return state.map((t) => todo(t, action));

		default:
			return state;
	}
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
	switch (action.type) {
		case 'SET_VISIBILITY_FILTER':
			return action.filter;
		default:
			return state;
	}
};

// reducer composition pattern
const todoApp = combineReducers({
	todos,
	visibilityFilter
});

const store = createStore(todoApp);

let nextTodoId = 0;
class TodoApp extends Component {
	render() {
		return (
			<div>
				<input ref={ node => {
					this.input = node;
				}}/>
				<button
					onClick={() => {
						store.dispatch({
							type: 'ADD_TODO',
							text: this.input.value,
							id: nextTodoId++
						});
						this.input.value = '';
					}}
				>
					Add Todo
				</button>
				<ul>
					{this.props.todos.map(todo => 
						<li key={todo.id}>
							{todo.text}
						</li>
					)}
				</ul>
			</div>
		);
	}
}

const render = () => {
	ReactDOM.render(<TodoApp 
		todos={store.getState().todos}
	/>, 
	document.getElementById('root'));
};

store.subscribe(render);
render();
