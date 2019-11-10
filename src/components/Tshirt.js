import React, { useContext } from 'react'
import { CartContext } from './CartContext';

function Tshirt(props) {
    const [cart, setCart] = useContext(CartContext)
    const addToCart = () => {
        const tshirt = { name: props.name, price: props.price }
        setCart(currstate => [...currstate, tshirt])
    }
    return (
        <div className="container">
            <article className="product">
                <header className="product__image-wrapper">
                    <img src="http://placehold.it/200x200" />
                </header>
                <section className="product__information-wrapper">
                    <h2 className="product__name">Product: {props.name}</h2>
                    <h3 className="product__price">Price: {props.price}$</h3>
                    <div className="product__information">
                        <span className="product__information--description">Description: </span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit architecto corporis ex. Vitae doloribus, eligendi qui repellendus officia odit tempore, aperiam sint corrupti sed, dolore pariatur. Est corrupti temporibus sit officiis explicabo, ea quos pariatur? Ipsa excepturi unde asperiores culpa repudiandae labore, voluptas aliquam provident?
                        </div>
                </section>
                <button className="button button--success" onClick={addToCart}>Add to Cart</button>
            </article>
            <hr />
        </div>
    )
}

export default Tshirt
