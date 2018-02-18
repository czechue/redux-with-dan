import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { toggleTodo } from '../actions';
import { getVisibleTodos } from '../reducers';
import TodoList from './TodoList';
import { fetchTodos } from '../../backend';

class VisibleTodoList extends Component {
	componentDidMount() {
		fetchTodos(this.props.filter).then((todos) =>
			console.log(this.props.filter, todos)
		);
	}

	componentDidUpdate(prevProps) {
		if (this.props.filter !== prevProps.filter) {
			fetchTodos(this.props.filter).then((todos) =>
				console.log(this.props.filter, todos)
			);
		}
	}

	render() {
		return <TodoList {...this.props} />;
	}
}

const mapStateToProps = (state, history) => {
	const filter = history.match.params.filter || 'all';
	return {
		todos: getVisibleTodos(state, filter),
		filter
	};
};

VisibleTodoList = withRouter(
	connect(mapStateToProps, { onTodoClick: toggleTodo })(VisibleTodoList)
);

export default VisibleTodoList;
