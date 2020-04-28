import React from 'react';
import {CartSummary} from './CartSummary';
import {Navigation} from './Navigation';
import '../styles.css'
export default function Header(props){

    
        return<div className=" sticky-top bg-dark text-white" style={{height:"6.4em"}}  >
        <div className="navbar-brand d-flex" >
        <h4 style={{width:"90%",paddingLeft:".6em"}}>DIGITALFLIX</h4>
        <div ><CartSummary {...props}/></div>
        </div>
       <Navigation  baseUrl="/shop/products" categories={ props.categories }  />
        </div>
    }

