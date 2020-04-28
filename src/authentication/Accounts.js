import React,{useState} from 'react';
import {Dropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function Accounts(props) {
 

 return (
    <>
      <Dropdown>
  <Dropdown.Toggle variant="outline-light" style={{color:"white",marginBottom:"-1em"}} id="dropdown-basic">
   Accounts
  </Dropdown.Toggle>
<Dropdown.Menu >
   <Link to="/shop/login" style={{textDecoration:"none",paddingLeft:".4em",color:"black"}}>Login</Link>
    <Link to="/shop/createaccount" style={{display:"block",textDecoration:"none",paddingLeft:".4em",color:"black"}} >Create Accounts</Link>
  </Dropdown.Menu>
</Dropdown>
 
    </>
  );
}




/* <Login {...props} show={loginShow} onHide={() => setLoginShow(false)}/>
<CreateAccount show={newShow} onHide={()=>setNewShow(false)}/> */