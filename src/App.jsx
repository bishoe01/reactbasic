import React, { useState } from 'react';
import AddTodos from './AddTodos';
import Section from './Section';
import TodoComponent from './TodoComponent';
import TodoList from './TodoList';
import './App.scss';

const filters = ['all', 'active', 'complete'];
function App(props) {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <div className='main'>
      <h1 style={{ marginBottom: "20px" }}>Todo List</h1>
      <Section filters={filters} filter={filter} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </div>
  );
}

export default App;