import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  const handleChange = (e) => setTodo(e.target.value);
  const handleAdd = () => {
    setTodos([...todos, todo]);
    setTodo('');
  };
  return (
    <div>
      {todos.map((t) => (
        <li key={Math.random()}>{t}</li>
      ))}
      <input
        type="text"
        value={todo}
        placeholder="add to do"
        onChange={handleChange}
      />
      <button onClick={handleAdd}>add</button>
    </div>
  );
};

export default TodoList;
