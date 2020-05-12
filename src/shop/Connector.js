import React, { useState,useEffect } from "react";
import { Switch, Route, Redirect }
from "react-router-dom"
import { useDispatch,useSelector,shallowEqual} from "react-redux";
import { loadData } from "../data/ActionCreators";
import { DataTypes } from "../data/Types";
import { Shop } from "./Shop";
import {CartDetails} from './CartDetails';
import DataGetter from '../data/DataGetter.js';
import { Checkout } from "./Checkout";
import { Thanks } from "./Thanks";
import {Description} from './Description';
import Login from '../authentication/Login.js';
import Orders from './Orders'
import CreateAccount from '../authentication/CreateAccount.js';

  export   function Connector() {
       const[data,setData]=useState();
       const dispatch=useDispatch();
       useEffect(()=>dispatch(loadData(DataTypes.CATEGORIES)),[dispatch]);
       const dataStore=useSelector(dataStore=>({...dataStore}),shallowEqual);
       const user=dataStore.user
      const handleChange=(e)=>{
        setData(e)
        console.log(data);
      }
   
       
    return <Switch>
    
        <Redirect from="/shop/products/:category" to="/shop/products/:category/1" exact={true}/>
       <Route exact={true} path={"/shop/products/:category/:page"} render={ (routeProps) =>
    <DataGetter {...dataStore} {...routeProps} data={data}>
     <Shop { ...dataStore} { ...routeProps } handleChange={handleChange}/>
    </DataGetter> }/>
         <Route path="/shop/cart" render={ (routeProps) =>
    <CartDetails { ...dataStore } { ...routeProps } />} />
    <Route path="/shop/checkout" render={ routeProps =>
    <Checkout { ...dataStore } { ...routeProps } /> } />
    <Route path="/shop/thanks" render={ routeProps =>
    <Thanks { ...dataStore} { ...routeProps } /> } />
    <Route path={"/shop/description/:id"} render={ (routeProps) =>
    <Description { ...dataStore} { ...routeProps } />} />
    <Route path={"/shop/login"} render={(routeProps)=>
    <Login user={user} {...routeProps}/>}/>
    <Route path={"/shop/createaccount"} render={(routeProps)=>
    <CreateAccount {...dataStore} {...routeProps}/>}/>
    <Route path={'/shop/orders'} render={(routeProps)=>
    <Orders ordersList={dataStore.ordersList} {...routeProps}/>}/>
    <Redirect to="/shop/products/all/1" />
    </Switch>
    
    }    
   
   
       