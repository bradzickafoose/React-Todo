import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const data = [
	{
		task      : 'Organize Garage',
		id        : 1528817077286,
		completed : false,
	},
	{
		task      : 'Bake Cookies',
		id        : 1528817084358,
		completed : false,
	},
];

class App extends React.Component {
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state
	constructor() {
		super();
		this.state = {
			tasks : data,
		};
	}
	// Class methods to update state
	addTodo = (task) => {
		// update task state with a new task
		const newTodo = {
			task      : task,
			id        : Date.now(),
			completed : false,
		};
		this.setState({
			tasks : [ ...this.state.tasks, newTodo ],
		});
	};

	toggleCompleted = (id) => {
		// loop through tasks data
		// find the task we clicked
		// toggle that task's completed property
		this.setState({
			tasks : this.state.tasks.map((item) => {
				if (item.id === id) {
					return {
						...item,
						completed : !item.completed,
					};
				} else {
					return item;
				}
			}),
		});
	};

	render() {
		console.log('rendering...');
		return (
			<div className='App'>
				<div className='header'>
					<h2>Welcome to your Todo App!</h2>
					<TodoForm addTodo={this.addTodo} />
				</div>
				<TodoList toggleCompleted={this.toggleCompleted} tasks={this.state.tasks} />
			</div>
		);
	}
}

export default App;
