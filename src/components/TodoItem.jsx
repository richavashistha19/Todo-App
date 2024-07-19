import React, { useState } from 'react';
import styled from 'styled-components';

const TodoListItem = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: ${props => (props.completed ? '#d4edda' : '#f8d7da')};

  & h3 {
    margin: 0 0 5px 0;
    text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
  }

  & p {
    margin: 0;
    text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
  }
`;

const Button = styled.button`
  padding: 5px 10px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  background-color: white;
  color: black;
  cursor: pointer;

  &:hover {
    background-color: green;
  }
`;

const TodoItem = ({ todo, updateTodo, deleteTodo, toggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);

  const handleUpdate = () => {
    updateTodo(todo.id, { ...todo, title, description });
    setIsEditing(false);
  };

  return (
    <TodoListItem completed={todo.completed}>
      {isEditing ? (
        <>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
          <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
          <Button onClick={handleUpdate}>Save</Button>
          <Button onClick={() => setIsEditing(false)}>Cancel</Button>
        </>
      ) : (
        <>
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
          <Button onClick={() => toggleComplete(todo.id)}>
            {todo.completed ? 'Undo' : 'Complete'}
          </Button>
          <Button onClick={() => setIsEditing(true)}>Edit</Button>
          <Button onClick={() => deleteTodo(todo.id)}>Delete</Button>
        </>
      )}
    </TodoListItem>
  );
};

export default TodoItem;
