import React from 'react';
import './App.scss';
function Section({ filters, filter, onFilterChange }) {
    return (
        <header className='header'>
            {filters.map((item, index) =>
                <button key={index} className='filter' onClick={() => onFilterChange(item)} style={{ marginRight: "10px" }}>{item}</button>
            )}
        </header>

    );

            }
    export default Section;