import {createContext, useState} from 'react'
import { useHref } from 'react-router-dom'


const addCartItem =(cartItems, productToAdd)=>{
    // find if cartItems contains productToAdd
   const existingCartItem=cartItems.find((cartItem)=>cartItem.id===productToAdd.id)
    // If found, increment quantity

    // return new array with modified cartItems/ new cart item
    return [...cartItems, {...productToAdd, quantity:1}]
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen:()=>{},
    cartItems:[],
    addItemToCart:()=>{}
})


export const CartProvider =({children})=>{
    const [isCartOpen, setIsCartOpen] =useState(false)
    const [cartItems, setCartItems] =useState([])

    const addItemToCart =(productToAdd) =>{
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const value ={isCartOpen, setIsCartOpen}

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}