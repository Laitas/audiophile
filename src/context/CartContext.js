import { createContext, useState, useEffect } from "react";
 const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart,setCart] = useState([])
    const [total,setTotal] = useState(0)
    const [itemsTotal,setItemsTotal] = useState(0)
    const addItem = (item, qty) =>{
        const existingItem = cart.find(curr => curr.id === item.id)
        if(existingItem){
            setCart(cart.map(curr => curr.id === item.id ? {...existingItem, quantity : existingItem.quantity + qty} : curr))
            return
        }
        setCart(prevState => [...prevState, {...item, quantity : qty}])
    }
    const increase = (item) =>{
        const existingItem = cart.find(curr => curr.id === item.id)
        setCart(cart.map(curr => curr.id === item.id ? {...existingItem, quantity : existingItem.quantity + 1} : curr))
    }
    const decrease = (item) =>{
        const existingItem = cart.find(curr => curr.id === item.id)
        setCart(cart.map(curr => curr.id === item.id ? {...existingItem, quantity : existingItem.quantity - 1} : curr))
        if(existingItem.quantity <= 1){
            setCart(cart.filter(item => item.id !== existingItem.id))
        }
    }
    useEffect(() =>{
        const sumOfTotal = cart.reduce(
            (sum, curr) => sum + parseFloat(curr.price * curr.quantity),
            0
            );
            setTotal(sumOfTotal)
        const sumOfTotalItems = cart.reduce(
            (sum, curr) => sum + curr.quantity,
            0
            );
            setItemsTotal(sumOfTotalItems)
    },[cart])

    const value = { cart,setCart,addItem,total,increase,decrease,itemsTotal }
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export  {CartProvider, CartContext}
