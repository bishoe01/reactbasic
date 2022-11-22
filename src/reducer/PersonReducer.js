function PersonReducer(person, action) {

    switch (action.type) {

        case "update": {
            const { prev, current } = action;
            return {
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
            };
        }

        case 'add': {
            const { new_name, new_position } = action;
            return {
                ...person,
                mentor: person.mentor.concat({
                    id: person.mentor.length + 1,
                    name: new_name,
                    title: new_position,
                    changed: false,
                })
            }
        }
        case 'delete': {
            const { prev } = action;
            return {
                ...person,
                mentor: person.mentor.filter((mentor) => {
                    if (mentor.id !== parseInt(prev)) {
                        return mentor;
                    }
                }
                )
            }
        }
        default: {
            throw Error(`알 수 없는 액션 타입 ${action.type}`)
        }

    }
}

export default PersonReducer;