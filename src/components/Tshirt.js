import React, { useContext } from 'react'
import { CartContext } from './CartContext';

function Tshirt(props) {
    const [cart, setCart] = useContext(CartContext)
    const addToCart = () => {
        console.log('clicked');
        const tshirt = { name: props.name, price: props.price }
        setCart(currstate => [...currstate, tshirt])
    }
    return (
        <div>
            <h2>Product: {props.name}</h2>
            <h4>Price: {props.price}</h4>
            <button onClick={addToCart}> Add to Cart</button>
            <hr />
        </div>
    )
}

export default Tshirt
