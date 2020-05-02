// import {React,useState} from 'react';
var formElements={}
export const FormElements=(value)=>{
    formElements=value;
}
export const GetMessages = (elem) => {
    const messages = [];
    if (elem.name!=="password2" && elem.validity.valueMissing) {
    messages.push(`${elem.name} required`);
  
    }
    if (elem.validity.typeMismatch) {
    messages.push(`Invalid ${elem.type}`);
  }
 if(elem.name==="password2" && !elem.validity.valueMissing ){
        messages.push("password do not match!")
    }
if(elem.name==="password2" && elem.validity.valueMissing && formElements===undefined){
  messages.push("please re-enter the password to confirm")
}
return messages;
    }