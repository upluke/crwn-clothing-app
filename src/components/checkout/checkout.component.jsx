 
import {useState, useContext } from "react"
import { CartContext } from "../../contexts/cart.context"

const CheckOut =()=>{
    const {cartItems, cartCount,editItemAddedToData} =useContext(CartContext)
    // const {currentQuantity, setCurrentQuantity} = useState()

    return(
        <div>
            {cartItems.map(item=>(
                        <div className='cart-item-container'>
                        <img src={item.imageUrl} alt={`${item.name}`} />
                        <div>
                            <span className='name'>{item.name}</span>
                            <span className='price'>    {item.quantity} ------- ${item.price}</span>
                            <button onClick={editItemAddedToData(item.id, 1)} >+</button>
                            <button onClick={editItemAddedToData(item.id, -1)} >-</button>
                        </div>
                     
                    </div>
                 
                 ))}
        </div>
    )
}

export default CheckOut