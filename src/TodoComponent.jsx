import React, { useState } from 'react';
import { DeleteIcon } from '@chakra-ui/icons'
function TodoComponent({task ,onUpdate,onDelete}) {
    const {text,status} = task;
    const handleChange = (e) => {
        onUpdate({...task, status : e.target.checked ? "complete" : "active"});
    }
    const handleDelete = (e) => {
        onDelete(task);
    }
    return (
        <li>
        <input id={task.id} type="checkbox" checked={status ==='complete'} onChange={handleChange}/>
        <label for={task.id}>{task.text}</label>
        <button onClick={handleDelete}><DeleteIcon /></button>
        </li>
    );
}

export default TodoComponent;