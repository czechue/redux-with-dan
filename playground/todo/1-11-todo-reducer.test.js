var deepFreeze = require('deep-freeze');

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

describe('todoApp', () => {
	test('changing visibility filter only doesnt affect todos state', () => {
		const stateBefore = {
			todos: ['todo1', 'todo2'],
			visibilityFilter: 'SHOW_ALL'
		}
		const action = {
			type: 'SET_VISIBILITY_FILTER',
			filter: 'SHOW_COMPLETED'
		}
		const stateAfter = {
			todos: ['todo1', 'todo2'],
			visibilityFilter: 'SHOW_COMPLETED'
		}
		deepFreeze(stateBefore);
		deepFreeze(action);

		expect(todoApp(stateBefore, action)).toEqual(stateAfter)
	})
});

// describe('visibilityFilter', () => {
// 	test('set visibility filter', () => {
// 		const filterBefore = 'SHOW_ALL'
// 		const action = {
// 			type: 'SET_VISIBILITY_FILTER',
// 			filter: 'SHOW_COMPLETED'
// 		}
// 		const filterAfter = 'SHOW_COMPLETED'		
		
// 		deepFreeze(filterBefore);
// 		deepFreeze(action);

// 		expect(visibilityFilter(filterBefore, action)).toEqual(filterAfter)
// 	})
// });

// describe('Todo Reducer', () => {
// 	test('add todo', () => {
// 		const stateBefore = [];
// 		const action = {
// 			type: 'ADD_TODO',
// 			id: 0,
// 			text: 'Learn Redux'
// 		};
// 		const stateAfter = [
// 			{
// 				id: 0,
// 				text: 'Learn Redux',
// 				completed: false
// 			}
// 		];

// 		deepFreeze(stateBefore);
// 		deepFreeze(action);

// 		expect(todos(stateBefore, action)).toEqual(stateAfter);
// 	});

// 	test('toggle todo', () => {
// 		const stateBefore = [
// 			{
// 				id: 0,
// 				text: 'Learn Redux',
// 				completed: false
// 			},
// 			{
// 				id: 1,
// 				text: 'Go shopping',
// 				completed: false
// 			}
// 		];
// 		const action = {
// 			type: 'TOGGLE_TODO',
// 			id: 1
// 		}
// 		const stateAfter = [
// 			{
// 				id: 0,
// 				text: 'Learn Redux',
// 				completed: false
// 			},
// 			{
// 				id: 1,
// 				text: 'Go shopping',
// 				completed: true
// 			}
// 		];

// 		deepFreeze(stateBefore);
// 		deepFreeze(action);

// 		expect(todos(stateBefore, action)).toEqual(stateAfter)

// 	})
// });

