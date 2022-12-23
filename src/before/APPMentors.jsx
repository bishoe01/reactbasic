import React, { useReducer, useState } from 'react'
import PersonReducer from '../reducer/PersonReducer';

export default function APPMentors() {
    // const [person, setPerson] = useState(initialPerson);
    const [person,dispatch] = useReducer(PersonReducer,initialPerson);
    const HandleChangeName = () => {
        const prev = prompt(`Who to change? type the ID`);
        const current = prompt(`What to change?`);
        dispatch({type:"update",prev,current})
    }
    const HandleDeleteMentor = () => {
        const prev = prompt(`Who to Delete? type the ID`);
        dispatch({type:"delete",prev})
    };
    const HandleAddMentor = () => {
        const new_name = prompt(`Name ? `);
        const new_position = prompt(`Position?`);
        dispatch({type:"add",new_name,new_position})
    }

    return (
        <div>
            <h1>DEVELOPMENT</h1>
            <p>{person.name}`s Mentor list</p>
            <ul>
                {person.mentor.map((mentor) => (
                    <li key={mentor.id}>
                        {mentor.name} is a {mentor.title} number: {mentor.id}, changed: {mentor.changed.toString()}
                    </li>
                ))}
            </ul>

            <button
                onClick={HandleChangeName}>
                Change Mentor`s name
            </button>
            <button
                onClick={HandleDeleteMentor}>
                Delete Mentor`s name
            </button>
            <button
                onClick={HandleAddMentor}>
                ADD MENTOR
            </button>

        </div >

    )
}

const initialPerson = {
    name: 'John',
    title: "Developer",
    mentor: [{
        id: 1,
        name: 'Mike',
        title: 'Senior Developer',
        changed: false,
    },
    {
        id: 2,
        name: 'Bob',
        title: 'Senior Developer',
        changed: false,
    },
    {
        id: 3,
        name: 'Andy',
        title: 'Senior Developer',
        changed: false,
    },
    ]
}

