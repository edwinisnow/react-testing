import React, { useState } from 'react'

function Ticket(props) {

    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count => count + 1)
    }

    return (
        <div>
            <h2 className="title">{props.name}</h2>
            <button onClick={incrementCount}>add</button>
            <h2 className="total">{count}</h2>
        </div>
    )
}

export default Ticket
