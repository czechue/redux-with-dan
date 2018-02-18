import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { toggleTodo, receiveTodos } from '../actions';
import { getVisibleTodos } from '../reducers';
import TodoList from './TodoList';
import { fetchTodos } from '../../backend';

class VisibleTodoList extends Component {
	componentDidMount() {
		this.fetchData();
	}

	componentDidUpdate(prevProps) {
		if (this.props.filter !== prevProps.filter) {
			this.fetchData();
		}
	}

	fetchData() {
		const { filter, receiveTodos } = this.props;
		fetchTodos(this.props.filter).then((todos) => receiveTodos(filter, todos));
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
	connect(mapStateToProps, { onTodoClick: toggleTodo, receiveTodos })(
		VisibleTodoList
	)
);

export default VisibleTodoList;
