import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { toggleTodo } from '../actions';
import { getVisibleTodos } from '../reducers'
import TodoList from './TodoList';

const mapStateToProps = (state, history) => ({
	todos: getVisibleTodos(state, history.match.params.filter || 'all')
});

// const mapDispatchToProps = (dispatch) => ({
// 	onTodoClick(id) {
// 		dispatch(toggleTodo(id));
// 	}
// });

const VisibleTodoList = withRouter(
	connect(
		mapStateToProps, 
		{onTodoClick: toggleTodo}
	)(TodoList)
);

export default VisibleTodoList;
