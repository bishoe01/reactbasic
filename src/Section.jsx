import React, { useState } from 'react';
import './App.scss';
function Section({ filters, filter, onFilterChange }) {
    const [selected, setSelected] = useState(filter);
    return (
        <header className='header'>
            <ul className="filters">
            {filters.map((item, index) =>
                <button key={index} className={
                    item === selected ? "selected filter" : "filter"
                } onClick={() => {
                    onFilterChange(item);
                    setSelected(item);
                }} style={{ marginRight: "10px" }}>{item}</button>
            )}
            </ul>
        </header>

    );

            }
    export default Section;