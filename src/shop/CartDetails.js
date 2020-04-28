import React from "react";
import { Link } from "react-router-dom";
import { CartDetailsRows } from "./CartDetailsRows";
import '../styles.css'

export function CartDetails(props) {
const getLinkClasses = () => `btn btn-secondary m-1
${props.cartItems === 0 ? "disabled": ""}`;

return <div className="container">
<div className="m-3">
<h2 className="text-center bg-primary">Your Cart</h2>
<table className="table table-bordered table-striped">
<thead>
<tr>
<th>Quantity</th>
<th>Product</th>
<th className="text-right">Price</th>
<th className="text-right">Subtotal</th>
<th/>
</tr>
</thead>
<tbody>
<CartDetailsRows cart={ props.cart}
cartPrice={ props.cartPrice }
updateQuantity={ props.updateCartQuantity }
removeFromCart={ props.removeFromCart } />
</tbody>
</table>
<div className="text-center">
<Link className="btn btn-primary m-1" to="/shop">
Continue Shopping
</Link>
<Link className={ getLinkClasses() } to="/shop/checkout">
Checkout
</Link>
</div>
</div>
</div> 
}
