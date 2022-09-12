import {createContext, useState, useEffect} from 'react'
import { useHref } from 'react-router-dom'


const addCartItem =(cartItems, productToAdd)=>{ 
    
    // find if cartItems contains productToAdd
   const existingCartItem=cartItems.find((cartItem)=>cartItem.id===productToAdd.id)
    // If found, increment quantity
    if (existingCartItem){
        return cartItems.map((cartItem)=>
            cartItem.id===productToAdd.id
            ?{...cartItem, quantity: cartItem.quantity+1} : cartItem
        )
    }
    // return new array with modified cartItems/ new cart item
    return [...cartItems, {...productToAdd, quantity:1}]
}

// -------------------------
const editCartItem=(cartItems, id, number)=>{
   return  cartItems.map(item=>
    item.id===id?{...item, quantity: item.quantity+number}:item
)}
     




export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen:()=>{},
    cartItems:[],
    addItemToCart:()=>{},
    cartCount:0,
    setQuantity:()=>{},

})


export const CartProvider =({children})=>{
    const [isCartOpen, setIsCartOpen] =useState(false)
    const [cartItems, setCartItems] =useState([])
    const [cartCount, setCartCount] =useState(0)  
    useEffect(()=>{
        const newCartCount=cartItems.reduce((total, cartItem )=>total+ cartItem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems])

    const addItemToCart =(productToAdd) =>{
        setCartItems(addCartItem(cartItems, productToAdd))  
    }
    // -----------------------
    const editItemAddedToData=(id, number)=>{
        setCartItems(editCartItem(cartItems, id, number))
    }

    const value ={isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount, editItemAddedToData} // ---------

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}