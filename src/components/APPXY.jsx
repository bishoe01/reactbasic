import React, { useState } from 'react';
import '../AppXY.scss';

export default function AppXY() {
    const [person, setPerson] = useState({
        name: 'John',
        title: "Developer",
        mentor: {
            name: 'Mike',
            title: 'Senior Developer',
        },
    });

    return (
        <div>
            <h1>
                {person.name} is {person.title}
            </h1>
            <p>
                {person.name}`s mentor is {person.mentor.name} who is a {person.mentor.title}`
            </p>
            <button
                onClick={() => {
                    const name = prompt(`what's your mentor's name?`);
                    setPerson({
                        ...person,
                        mentor: {
                            ...person.mentor,
                            name,
                        },
                    });
                }}>
                Change Mentor
            </button>
            <button
                onClick={() => {
                    const title = prompt(`what's your mentor's title?`);
                    setPerson({
                        ...person,
                        mentor: {
                            ...person.mentor,
                            title,
                        },
                    });
                }}>
                멘토 타이틀 변경
            </button>
        </div>

    );

}