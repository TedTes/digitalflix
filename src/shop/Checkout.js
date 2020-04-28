import React from "react";
import {useDispatch} from 'react-redux';
import { ValidatedForm } from "../forms/ValidatedForm";
import { placeOrder } from "../data/ActionCreators";
import {  clearCart }
from "../data/CartActionCreators";
import '../styles.css'
export function Checkout(props) {
// constructor(props) {
// super(props);
 const dispatch=useDispatch();
const defaultAttrs = { type: "text", required: true };
const formModel = [
{ label: "Name"},
{ label: "Email", attrs: { type: "email" }},
{ label: "Address" },
{ label: "City"},
{ label: "Zip/Postal Code", name: "zip"},
{ label: "Country"}]

const handleSubmit = (formData) => {
const order = { ...formData, products: props.cart?props.cart.map(item =>
({ quantity: item.quantity, product_id: item.product.id})):[{}] }
dispatch(placeOrder(order));
dispatch(clearCart());
props.history.push("/shop/thanks");
}
const handleCancel = () => {
props.history.push("/shop/cart");
}
return<div className="container">
<div className="container-fluid">
<div className="row">
<div className="col bg-dark text-white">
<div className="navbar-brand header">DIGITALFLIX</div>
</div>
</div>
<div className="row">
<div className="col m-2">
<ValidatedForm name="checkout" formModel={ formModel }
defaultAttrs={ defaultAttrs }
submitCallback={ handleSubmit }
cancelCallback={ handleCancel }
submitText="Place Order"
cancelText="Return to Cart" />
</div>
</div>
</div>
</div>
}
