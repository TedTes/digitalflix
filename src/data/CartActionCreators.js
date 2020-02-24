import {ActionTypes} from './Types';

const addToCart=(product,quantity)=>({
    type:ActionTypes.CART_ADD,
    payload:{
        product,
        quantity:quantity ||  1
    }
})

const removeFromCart=(product)=>({
type:ActionTypes.CART_REMOVE,
payload: product
})

 const updateCartQuantity = (product, quantity) => ({
type: ActionTypes.CART_UPDATE,
payload: { product, quantity }
})
 const clearCart = () => ({
type: ActionTypes.CART_CLEAR
})

export {addToCart,removeFromCart,updateCartQuantity,clearCart}