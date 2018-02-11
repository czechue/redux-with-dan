var deepFreeze = require('deep-freeze');

const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				{
					completed: false,
					text: action.text,
					id: action.id
				}
      ];

		default:
			return state;
	}
};

describe('Todo Reducer', () => {
	test('add todo', () => {
		const stateBefore = [];
		const action = {
			type: 'ADD_TODO',
			id: 0,
			text: 'Learn Redux'
		};
		const stateAfter = [
			{
				id: 0,
				text: 'Learn Redux',
				completed: false
			}
		];

		deepFreeze(stateBefore);
		deepFreeze(action);

		expect(todos(stateBefore, action)).toEqual(stateAfter);
  });

});
