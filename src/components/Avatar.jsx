import React from 'react'
import '../App.css';
export default function Avatar({person}) {
    return (
        <div className='avatar'>
        <img className="photo" src={person.profile} alt="" />
        {person.level === 1 && <p className='tag'>NEW</p>}
        </div>
    )
}
