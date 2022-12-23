import React from 'react'
import Avatar from './Avatar'

export default function AppProfile({person}) {
    return (
        <div className='profile'>
            <Avatar person={person}></Avatar>
            <h1>{person.name}</h1>
            <p>{person.position}</p>
            </div>
    )
}
