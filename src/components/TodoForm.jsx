import React, { useState } from 'react';
import styled from 'styled-components';

const TodoInput = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;

  & .todo-input-items {
    margin-bottom: 10px;
  }

  & label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  & input {
    width: 100%;
    padding: 8px;
    margin-top: 2px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  background-color: white;
  color: black;
  cursor: pointer;
  height: 30px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: green;
  }

  &.primaryBtn {
    background-color: black;
    margin-top: 20px;
    color: white;

    &:hover {
      background-color: green;
    }
  }
`;

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (title && description) {
      addTodo(title, description);
      setTitle('');
      setDescription('');
    }
  };

  return (
    <TodoInput>
      <div className="todo-input-items">
        <label>Title</label>
        <input type="text" placeholder="Enter task title" value={title} onChange={e => setTitle(e.target.value)} />
      </div>
      <div className="todo-input-items">
        <label>Description</label>
        <input type="text" placeholder="Enter task description" value={description} onChange={e => setDescription(e.target.value)} />
      </div>
      <div className="todo-input-item">
        <Button type="button" className="primaryBtn" onClick={handleSubmit}>
          Add
        </Button>
      </div>
    </TodoInput>
  );
};

export default TodoForm;
