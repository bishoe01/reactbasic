import React, { useState } from 'react';
const { v4: uuidv4 } = require('uuid');

function AddTodos({onAdds}) {
    const [text, setText] = useState("");
    const handleChange = (e) => {
        setText(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!text) return;
        onAdds({id: uuidv4(), text, status : "active" });
        setText("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" 
            value={text}
            placeholder='Enter your todos'
            onChange = {handleChange}
            />
        </form>
    );
}

export default AddTodos;