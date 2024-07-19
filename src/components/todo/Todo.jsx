import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TodoForm from '../TodoForm';
import TodoList from '../TodoList';

const AppWrapper = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
  background-color: rgb(113, 121, 126);
  height: 100vh;
`;

const TodoWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px black;
  background-color: rgb(54, 69, 79);
`;

const HorizontalLine = styled.hr`
  border: none;
  border-top: 1px solid white;
  margin: 20px 0;
`;

const Todo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title, description) => {
    setTodos([...todos, { id: Date.now(), title, description, completed: false }]);
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos(todos.map(todo => (todo.id === id ? updatedTodo : todo)));
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleComplete = id => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  return (
    <AppWrapper>
      <h1>My Todo</h1>
      <TodoWrapper>
        <TodoForm addTodo={addTodo} />
        <HorizontalLine />
        <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
      </TodoWrapper>
    </AppWrapper>
  );
};

export default Todo;
