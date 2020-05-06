import React,{useState,useEffect} from 'react';
import {Button} from 'react-bootstrap';
import {login} from '../data/ActionCreators';
import {useDispatch,useSelector,shallowEqual} from 'react-redux';

export default function Login(props) {
    const data={...props.user}
 
     if(data.authenticated){
    props.history.push('/shop/products')
  }  

    var form=document.forms.login;
    const[message,setMessage]=useState('');
    const dispatch=useDispatch();
     const handleCancel=()=>{
       props.history.push('/shop/products')
     }
    const  handleSubmit=()=>{
     (!form.checkValidity()||!data.authenticated)?setMessage("please provide valid username & password"):setMessage("")
  const account={
        name:form.name.value,
        password:form.password.value
    }
    if((account.name!=='' && account.password!=='')){
     dispatch(login(account)) ;
}
    }
      return (
        <div className="wrapper"> 
    <div className="login">
      <h1 className="forms-brandName">DIGITALFLIX</h1>
        <h4 style={{marginBottom:".4em"}}>Login</h4> 
         <h6 className="text-danger" style={{ position:"absolute",marginBottom:"-3em",margingTop:"1em",padding:"0",fontSize:".8em",fontWeight:"bold"}}>{message}</h6>
          <form className="form-group" name="login" style={{marginTop:"2em"}}> 
          <label>Username</label><br/>
       <input className="form-control" name="name" style={{width:"308px"}} type="text" required/><br/>
     <label>password</label><br/>
     <input className="form-control" name="password" type="password" style={{width:"308px"}} required/>
     <div style={{marginTop:"5.5%"}}>
        <Button variant="secondary" onClick={handleCancel}>Cancel</Button>&nbsp;
        <Button onClick={handleSubmit} >Login</Button>
    </div>
  </form>
    </div>
    <footer ><h1 className="copyright">Copyright 2020 digitalflix.com</h1></footer>
    </div>

      );
    }