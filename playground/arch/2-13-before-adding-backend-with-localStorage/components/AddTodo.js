import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import PropTypes from 'prop-types';

const AddTodo = ({ dispatch }) => {
	let input;

	return (
		<div>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					if (!input.value.trim()) {
						return;
					}
					dispatch(addTodo(input.value));
					input.value = '';
				}}
			>
				<input
					ref={(node) => {
						input = node;
					}}
				/>
				<button type='submit'>Add Todo</button>
			</form>
		</div>
	);
};
// if u pass null in connect() - u will have dispatch as a prop in AddTodo
AddTodo.propTypes = {
	dispatch: PropTypes.func.isRequired
};

export default connect()(AddTodo);
