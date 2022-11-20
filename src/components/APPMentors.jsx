import React, { useState } from 'react'

export default function APPMentors() {
    const [person, setPerson] = useState(initialPerson);
    const HandleChangeName = () => {
        const prev = prompt(`Who to change? type the ID`);
        const current = prompt(`What to change?`);
        setPerson({
            ...person,
            mentor: person.mentor.map((mentor) => {
                if (mentor.id === parseInt(prev)) {
                    return {
                        ...mentor,
                        name: current,
                        changed: true,
                    };
                }
                return mentor;
            }
            )
        })
    }
    const HandleDeleteMentor = () => {
        const prev = prompt(`Who to Delete? type the ID`);
        setPerson({
            ...person,
            mentor: person.mentor.filter((mentor) => {
                if (mentor.id !== parseInt(prev)) {
                    return mentor;
                }
            }
            )
        })
    };
    const HandleAddMentor = () => {
        const new_name = prompt(`Name ? `);
        const new_position = prompt(`Position?`);
        setPerson({
            ...person,
            mentor: person.mentor.concat({
                id: person.mentor.length + 1,
                name: new_name,
                title: new_position,
                changed: false,
            })
        })
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

