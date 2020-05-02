import React,{useState,useEffect} from 'react';
import {Dropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function Accounts(props) {
 const[data,setData]=useState({...props.user});
const handleClick=(props)=>{
  console.log(data.name)
  console.log(props)
}
 return (
    <>
    
<div className="account" onClick={handleClick}>
   <Link to="/shop/login" style={{color:"white"}} >Login</Link>/
    <Link to="/shop/createaccount" style={{color:"white"}} >Register</Link>
  </div>

 
    </>
  );
}




/* <Login {...props} show={loginShow} onHide={() => setLoginShow(false)}/>
<CreateAccount show={newShow} onHide={()=>setNewShow(false)}/> */