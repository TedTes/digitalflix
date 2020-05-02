import React, { useState,useEffect } from "react";
import { ValidationError } from "./ValidationError";
import { GetMessages,FormElements } from "./ValidationMessages";
export function ValidatedForm(props){

 const[validationErrors,setState]=useState({ })
 const[firstLoad,setLoad]=useState(false)
const formElements = {};
useEffect(()=> { 
  
  if(props.name==="checkout"){
    if ( Object.keys(validationErrors).length === 0 && firstLoad) {
      const data = Object.assign(...Object.entries(formElements)
  .map(e => ({[e[0]]: e[1].value})) )
     props.submitCallback(data)
    } }
else if(firstLoad){
 props.submitCallback2(formElements,validationErrors);
}
 },[validationErrors,firstLoad])
const handleSubmit = (e) => {
   e.preventDefault();
    setLoad(true)
    setState((prevState)=>{
   const newState = { ...validationErrors}
   
    Object.values(formElements).forEach(elem => {
    if (!elem.checkValidity()) {
    newState[elem.name] = GetMessages(elem);
   }else{
     delete newState[elem.name]
 } })
   FormElements(newState["password"])
 if(formElements.password!==undefined && formElements.password.value!==formElements.password2.value){
   newState["password2"]=GetMessages(formElements.password2);
}
  


    return newState
  })
}
 const registerRef = (element) => {
    if (element !== null) {
    formElements[element.name] = element;
     }
    }
    const renderElement = (modelItem) => {
     const name = modelItem.name || modelItem.label.toLowerCase();
       return <div className="form-group" key={ modelItem.label }>
    <label>{ modelItem.label }</label>
    <input className="form-control" style={{width:"330px"}} name={ name } ref={registerRef }
    { ...props.defaultAttrs } { ...modelItem.attrs } />
     <ValidationError errors={validationErrors[name]}/>
    </div>
    }
 
    return <React.Fragment>
    { props.formModel.map(m => renderElement(m))}
    <div className="text-center" style={{marginTop:"1.4em"}}>
    <button className="btn btn-secondary m-1"
    onClick={ props.cancelCallback }>
    { props.cancelText || "Cancel" }
    </button>
    <button className="btn btn-primary m-1" onClick={ handleSubmit}>
    { props.submitText || "Submit"}
    </button>
    </div>
    </React.Fragment>
 }
