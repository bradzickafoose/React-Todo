import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';

const List = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	width: 100%;
	margin: 0 auto;
`;

const TodoList = (props) => {
	return (
		<List>
			{props.tasks.map((item) => <Todo key={item.id} item={item} toggleCompleted={props.toggleCompleted} />)}
			<button className='clear-btn' onClick={props.clearCompleted}>
				Clear Completed
			</button>
		</List>
	);
};

export default TodoList;
