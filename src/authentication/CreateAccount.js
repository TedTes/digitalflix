import React from 'react';
import {useDispatch} from 'react-redux';
import { ValidatedForm } from "../forms/ValidatedForm";
import { createAccount } from "../data/ActionCreators";
export default function CreateAccount(props){
    const dispatch=new useDispatch();
    const defaultAttrs = { type: "text", required: true };
    const formModel = [
    { label: "Name"},
    { label: "Email", attrs: { type: "email" }},
    { label: "Password",name:"password", attrs:{type:"password"}},
    { label: "Re-enter Password",name:"password2",attrs:{type:"password"}}]

    const handleCancel=()=>{
      props.history.push('/shop/products')
    }
   const handleSubmit=(data,validationErrors)=>{
   let acct={
        name:data.name.value,
        email:data.email.value,
        password:data.password.value
     }
      if(Object.keys(validationErrors).length===0){ dispatch(createAccount(acct));}
    }
  
    return( <div className="register">
      <h1 className="brandName">DIGITALFLIX</h1>
        <h3>Create Account</h3>
  <form name="createAccount">
  <ValidatedForm name="account" formModel={formModel} defaultAttrs={defaultAttrs} submitCallback2={handleSubmit} cancelCallback={handleCancel}/>
  </form>
    </div>
   
    
    
  
    )
  }