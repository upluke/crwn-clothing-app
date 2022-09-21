 
import {useState, useContext } from "react"
import { CartContext } from "../../contexts/cart.context"

import './checkout.styles.scss'
const Checkout =()=>{
    const {cartItems,addItemToCart, removeItemFromCart} =useContext(CartContext)
    // const {currentQuantity, setCurrentQuantity} = useState()

    return(
        <div>
            {cartItems.map((cartItem)=>{
                    const {id, name, quantity} = cartItem
                    return (
                        <div key={id} className='cart-item-container'>
                            {/* <img src={imageUrl} alt={`${name}`} /> */}
                            <div>
                                <span className='name'>{name}</span>
                                <span className='price'>    {quantity} </span>
                                <span >decrement</span>
                                <br />
                                <span onClick={()=>addItemToCart(cartItem)}>increment</span>
                                <span onClick={()=>removeItemFromCart(cartItem)}>decrement</span>
                            </div>
                     
                    </div>
                    )
                 })}
        </div>
    )
}

export default Checkout 