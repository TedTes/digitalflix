import React,{useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {logout} from '../data/ActionCreators';
import {Link} from 'react-router-dom';

export default function Accounts(props) {
 const[data,setData]=useState({...props.user});
 const dispatch=useDispatch();
 const dataStore=useSelector(dataStore=>({...dataStore}));
//  console.log("from accounts")
 const userData={...dataStore.user}
 const logoutUser=()=>{
   dispatch(logout());
 }
const handleClick=(props)=>{
  console.log(data.name)
  console.log(props)
}
 return (
    <>
    
<div className="account" >
   <Link to="/shop/login" onClick={handleClick} style={{color:"white"}} >{userData.name!==undefined?userData.name:"Login"}</Link>|
   {userData.name!==undefined?<Link  style={{color:"white"}} onClick={logoutUser}>Logout</Link>: <Link to="/shop/createaccount" style={{color:"white"}} >Register</Link>}
  </div>

</>
  );
}




/* <Login {...props} show={loginShow} onHide={() => setLoginShow(false)}/>
<CreateAccount show={newShow} onHide={()=>setNewShow(false)}/> */