import {CartItem} from "../cart-item/cart-item.component"

const CheckOut =()=>{
    
    return(
        <div>
            {[].map(item=>(
                 <CartItem/>
                 
                 ))}
        </div>
    )
}

export default CheckOut