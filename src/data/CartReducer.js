import {ActionTypes} from './Types';

export const CartReducer=(dataStore,action)=>{
    let newStore={cart:[],cartPrice:0,cartItems:0,...dataStore}
    switch(action.type){
        case ActionTypes.CART_ADD:
        const p=action.payload.product;
        const q=action.payload.quantity;
        let existing = newStore.cart.find(item => item.product.id === p.id);
        if(existing)
        existing.quantity+=q;
        else 
       newStore.cart= [...newStore.cart,action.payload]
       newStore.cartItems+=q;
       newStore.cartPrice+=p.price*q;

       return newStore;

       case ActionTypes.CART_UPDATE:
         newStore.cart=newStore.cart.map(item=>{
                 if(action.payload.product.id===item.product.id)
                 {const dif=action.payload.quantity-item.quantity;
                    newStore.cartItems+=dif;
                    newStore.cartPrice+=dif*item.product.price;
                    return action.payload;
                }
                else{
                    return item;
                }
               
            })
            return newStore;

       case ActionTypes.CART_REMOVE:
           const selected=newStore.cart.find(item=>item.product.id===action.payload.id)
            newStore.cartItems-=selected.quantity
            // newStore.cartPrice-=selected.quantity*selected.product.price;
            newStore.cartPrice=newStore.cartPrice-selected.quantity*selected.product.price;
           newStore.cart= newStore.cart.filter(item=>item!==selected)
            return newStore;
    case ActionTypes.CART_CLEAR:
         return { ...dataStore, cart: [], cartItems: 0, cartPrice: 0}
       default:
           return newStore || {}
    }
}