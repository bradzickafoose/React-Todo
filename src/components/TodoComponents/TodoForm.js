import React from 'react';

class TodoForm extends React.Component {
	// Constructor with state
	// add a state property called "newToDo"
	// set the value of "this.state.newToDo" to an empty string
	constructor() {
		super();
		this.state = {
			newTodo : '',
		};
	}

	handleChanges = (e) => {
		// update state with each keystroke
		// setNewToDo(e.target.value)
		this.setState({
			newTodo : e.target.value,
		});
	};

	// class method to submit form
	handleSubmit = (e) => {
		e.preventDefault();
		console.log("it's working!");

		this.props.addTodo(this.state.newTodo);
		this.setState({ newTodo: '' });
	};

	render() {
		console.log('rendering form');
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor='item'>New Todo</label>
				<input type='text' name='item' id='item' value={this.state.newTodo} onChange={this.handleChanges} />
				<button>Add</button>
			</form>
		);
	}
}

export default TodoForm;
