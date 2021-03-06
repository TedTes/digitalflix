import React from "react";
import { Navigation } from "./Navigation";
import { ProductsList } from "./ProductsList";
import { CartSummary } from "./CartSummary";
import { ProductPageConnector } from "./ProductPageConnector";
import { PaginationControls } from "../controls/PaginationControls";
import { addToCart} from "../data/CartActionCreators";
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import  '../styles.css';

export const AuthContext=React.createContext();
const ProductPages = ProductPageConnector(PaginationControls);
export function Shop(props){
     const data={...props.user}
     const dispatch=useDispatch();

        const handleChange=(e)=>{
             props.handleChange(e);
      }
       const  handleAddToCart = (...args) => {
        dispatch(addToCart(...args));
        // this.props.history.push("/shop/cart");
        }
return <div className="container-fluid">
<div className=" sticky-top bg-dark text-white" style={{height:"6.4em"}} >
<div className="navbar-brand d-flex" >
<h4 className="brand">DIGITALFLIX</h4>
<div className="cart">
<CartSummary {...props}/>
</div>
</div>
{data.roles==="Admin"?<Link to="/shop/orders" className="orders">CHECK ORDERS</Link>:''}
<Navigation handleChange={handleChange} baseUrl="/shop/products" categories={ props.categories }  />
</div>
<div className="grid-view">
<ProductsList products={ props.products } addToCart={ handleAddToCart } clssName="card"/>   
</div>     
 
  
{props.products?<ProductPages/>:""}
</div>

}
