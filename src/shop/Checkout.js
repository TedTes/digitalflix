import React from "react";
import {useDispatch} from 'react-redux';
import { ValidatedForm } from "../forms/ValidatedForm";
import { placeOrder } from "../data/ActionCreators";
import {  clearCart }
from "../data/CartActionCreators";

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
return<div className="checkout-form">
<h1 className="forms-brandName">DIGITALFLIX</h1>
<h2>Reciever Address</h2>
<div>
<ValidatedForm name="checkout" formModel={ formModel }
defaultAttrs={ defaultAttrs }
submitCallback={ handleSubmit }
cancelCallback={ handleCancel }
submitText="Place Order"
cancelText="Return to Cart" />
</div>
</div>
}
