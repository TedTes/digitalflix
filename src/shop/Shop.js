import React, { Component } from "react";
import { Navigation } from "./Navigation";
import { ProductsList } from "./ProductsList";
import { CartSummary } from "./CartSummary";
import { ProductPageConnector } from "./ProductPageConnector";
import { PaginationControls } from "../controls/PaginationControls";
// import Description from './Description';
import './styles.css'

const ProductPages = ProductPageConnector(PaginationControls);
export class Shop extends Component {
    handleAddToCart = (...args) => {
        this.props.addToCart(...args);
        // this.props.history.push("/shop/cart");
        }
render() {
return <div className="container-fluid">
<div className="row sticky-top">
<div className="col-6 bg-dark text-white ">
<div className="navbar-brand ">DIGITALFLIX</div>
</div>
<div className="nav col-6 p-2  bg-dark d-flex justify-content-between">
<Navigation  baseUrl="/shop/products" categories={ this.props.categories }  />
<CartSummary {...this.props}/>
</div>
</div>

 <div className="grid-view">
<ProductsList products={ this.props.products } addToCart={ this.handleAddToCart } clssName="card"/>   

</div>
<ProductPages/>
</div>
}
}