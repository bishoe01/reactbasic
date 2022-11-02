import React, { useState } from 'react'

export default function Counter({total,handleCount}) {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>{count}/{total}</h1>
            <button onClick={() => {
                setCount(count+1)
                handleCount()
            }
                }>+</button>
        </div>
    )
}
