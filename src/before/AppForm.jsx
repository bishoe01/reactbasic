import React, { useState } from 'react';

function AppForm(props) {
        const [form , setForm] = useState({name: "", email: ""});
        const handleSubmit = (event) => {
            event.preventDefault();
            console.log(form);
        }
        const handleChange = (event) => {
            const {name, value } = event.target;
            setForm({...form, [name]: value});
        }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>이름</label>
            <input type='text' id='name' name='name' value={form.name}
            onChange={handleChange}/>
            <label htmlFor='email'>이메일</label>
            <input type='email' id='email' name='email' value={form.email} onChange={handleChange}/>
            <button type='submit'>확인</button>
            </form>
            
    );
}

export default AppForm;