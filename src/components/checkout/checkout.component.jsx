 
import { useContext } from "react"
import { CartContext } from "../../contexts/cart.context"

const CheckOut =()=>{
    const {cartItems, cartCount} =useContext(CartContext)
     
    return(
        <div>
            {cartItems.map(item=>(
                        <div className='cart-item-container'>
                        <img src={item.imageUrl} alt={`${item.name}`} />
                        <div>
                            <span className='name'>{item.name}</span>
                            <span className='price'>{item.quantity} x ${item.price}</span>
                        </div>
                     
                    </div>
                 
                 ))}
        </div>
    )
}

export default CheckOut