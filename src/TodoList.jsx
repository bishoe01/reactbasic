import React, { useState } from 'react';
import AddTodos from './AddTodos';
import Section from './Section';
import TodoComponent from './TodoComponent';

const filters = ['all', 'active', 'complete'];
function TodoList({filter}) {
    const [todos, setTodos] = useState([
        { id: 123, text: 'Learn React', status: "active" },
        { id: 124, text: 'Learn Node', status: "active" },
    ]);
    const handleAdds = (todo) => {
        setTodos([...todos, todo]);
    }
    const handleUpdate = (updated) => { setTodos(todos.map((t) => t.id === updated.id ? updated : t)) }
    const handleDelete = (deleted) => {
        setTodos(todos.filter((t) => t.id !== deleted.id));
    } 
    const filtered = getFilteredItems(todos, filter);
    return (
        <div>
            <ul>
                {filtered.map((item, index) => (
                    <TodoComponent key={index} task={item} onUpdate={handleUpdate} onDelete={handleDelete} />
                ))
                }
            </ul>
            <AddTodos onAdds={handleAdds} />
        </div>
    );
}

function getFilteredItems(todos,filter){
    if(filter === 'all') return todos;
    if(filter === 'active') return todos.filter((t) => t.status === 'active');
    if(filter === 'complete') return todos.filter((t) => t.status === 'complete');
    
}

export default TodoList;