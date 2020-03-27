import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
	background-color: #e64944;
	width: 45%;
	text-align: left;
	margin: 4px 0;
	padding-left: 8px;
	cursor: pointer;

	&.completed {
		background-color: #d17d7c;
		text-decoration: line-through;
	}
`;

const Todo = (props) => {
	return (
		<Item
			className={`todo${props.item.completed ? ' completed' : ''}`}
			onClick={() => props.toggleCompleted(props.item.id)}>
			<p>{props.item.task}</p>
		</Item>
	);
};

export default Todo;
