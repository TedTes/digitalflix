import React from "react";
import { Navigation } from "./Navigation";
import { ProductsList } from "./ProductsList";
import { CartSummary } from "./CartSummary";
import { ProductPageConnector } from "./ProductPageConnector";
import { PaginationControls } from "../controls/PaginationControls";
import { addToCart} from "../data/CartActionCreators";
import {useDispatch} from 'react-redux';
import  '../styles.css';

export const AuthContext=React.createContext();
const ProductPages = ProductPageConnector(PaginationControls);
export function Shop(props){
  
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
<h4 className="font-italic" style={{width:"90%",paddingLeft:".6em"}}>DIGITALFLIX</h4>
<div >
<CartSummary {...props}/>
</div>
</div>
<AuthContext.Provider value={props}>
<Navigation handleChange={handleChange} baseUrl="/shop/products" categories={ props.categories }  />
</AuthContext.Provider>



</div>

   
   <div className="grid-view">
<ProductsList products={ props.products } addToCart={ handleAddToCart } clssName="card"/>   
</div>     
 
  
{props.products?<ProductPages/>:""}
</div>

}
