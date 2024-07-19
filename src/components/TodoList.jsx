import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListWrapper = styled.div`
  margin-top: 20px;
  text-align: left;
`;

const TodoList = ({ todos, updateTodo, deleteTodo, toggleComplete }) => {
  return (
    <TodoListWrapper>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </TodoListWrapper>
  );
};

export default TodoList;
