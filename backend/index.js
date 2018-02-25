import { v4 } from 'uuid';

// Fake in-memory implementation of REST server

const fakeDatabase = {
	todos: [
		{
			id: v4(),
			text: 'hey',
			completed: true
		},
		{
			id: v4(),
			text: 'hey oo',
			completed: false
		},
		{
			id: v4(),
			text: 'wwwwwww',
			completed: true
		},
		{
			id: v4(),
			text: '123123',
			completed: true
		},
		{
			id: v4(),
			text: 'zzzzzzz',
			completed: false
		}
	]
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchTodos = (filter) =>
	delay(5000).then(() => {
		if (Math.random() > 0.5) {
			throw new Error('Errorroorroro')
		}
		switch (filter) {
			case 'all':
				return fakeDatabase.todos;
			case 'active':
				return fakeDatabase.todos.filter((t) => !t.completed);
			case 'completed':
				return fakeDatabase.todos.filter((t) => t.completed);
			default:
				throw new Error(`Unknow filter: ${filter}`);
		}
	});
