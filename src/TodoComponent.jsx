import React, { useState } from 'react';
import { DeleteIcon } from '@chakra-ui/icons'
import './App.scss';
function TodoComponent({task ,onUpdate,onDelete}) {
    const {text,status} = task;
    const handleChange = (e) => {
        onUpdate({...task, status : e.target.checked ? "complete" : "active"});
    }
    const handleDelete = (e) => {
        onDelete(task);
    }
    return (
        <li className='todoComponents'>
        <input id={task.id} type="checkbox" checked={status ==='complete'} onChange={handleChange}/>
        <label for={task.id}>{task.text}</label>
        <button onClick={handleDelete}><DeleteIcon /></button>
        </li>
    );
}

export default TodoComponent;