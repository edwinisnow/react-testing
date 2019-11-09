import React from 'react'
import Tshirt from './Tshirt';

function TshittList() {
    const db = [
        { name: 'red tshirt', price: 1, id: 1 },
        { name: 'blue tshirt', price: 5, id: 2 },
        { name: 'green tshirt', price: 10, id: 3 },
    ]
    return (
        <div>
            {
                db && db.map(item => {
                    return <Tshirt name={item.name} price={item.price} key={item.id} />
                })
            }
        </div>
    )
}

export default TshittList
