import React from "react";
import {useDispatch} from 'react-redux';
import {removeFromCart,updateCartQuantity} from '../data/CartActionCreators'
export function CartDetailsRows(props) {
  
    const dispatch=useDispatch();
const handleChange = (product, event) => 
event.target.value>0?dispatch(updateCartQuantity(product, event.target.value)):0;


if (!props.cart || props.cart.length === 0) {
return <tr>
<td colSpan="5">Your cart is empty</td>
</tr>
} else {
        return <React.Fragment>
{ props.cart.map(item =>
<tr key={ item.product.id }>
<td>
<input type="number" value={ item.quantity }
onChange={ (ev) =>handleChange(item.product, ev) } />
</td>
<td>{ item.product.name }</td>
<td>${ item.product.price.toFixed(2) }</td>
<td>${ (item.quantity * item.product.price).toFixed(2) }</td>
<td>
<button className="btn btn-sm btn-danger" onClick={() =>dispatch(removeFromCart(item.product))}>
Remove
</button>
</td>
</tr>
)}
<tr>
<th colSpan="3" className="text-right">Total:</th>
<th colSpan="2">${ props.cartPrice.toFixed(2) }</th>
</tr>
</React.Fragment>
    }

}



 