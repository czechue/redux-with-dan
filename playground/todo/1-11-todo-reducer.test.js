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
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo.id != action.id) {
          return todo
        } else {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
      })

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
  
  test('toggle todo', () => {
    const stateBefore = [
      {
        id: 0,
        text: 'Learn Redux',
        completed: false
      },
      {
        id: 1,
        text: 'Go shopping',
        completed: false
      }
    ];    
    const action = {
      type: 'TOGGLE_TODO',
      id: 1
    }
    const stateAfter = [
      {
        id: 0,
        text: 'Learn Redux',
        completed: false
      },
      {
        id: 1,
        text: 'Go shopping',
        completed: true
      }
    ]; 

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(todos(stateBefore, action)).toEqual(stateAfter)
    
  })
});
