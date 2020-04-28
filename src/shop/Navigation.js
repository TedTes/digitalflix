import React from "react";
import Search from './Search'
import {Navbar,Nav,Col,Row} from 'react-bootstrap'
import Accounts from '../authentication/Accounts';
import '../styles.css'

export function Navigation(props){
  const handleChange=(e)=>{
        props.handleChange(e);
        }

return  <Row ><Col xs="4" md="4" lg="7"> <Navbar bg="dark" expand="lg">
   <img style={{color:"white",width:"50px",height:"50px",border:"1px white solid"}} src="../images/menu.png" alt=" "/>
    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{background:"white"}} />
  <Navbar.Collapse id="basic-navbar-nav" >
  <Nav className="mr-auto">
 
    <Nav.Link href={props.baseUrl } className="text-white text-decoration-none">All</Nav.Link>
{ props.categories && props.categories.map(cat =>
<Nav.Link key={ cat } href={ `${props.baseUrl}/${cat.toLowerCase()}`} className="text-white text-decoration-none">
{ cat}
</Nav.Link> 
)}
</Nav> 
</Navbar.Collapse>
</Navbar>
</Col>
<Col>
<div className="d-flex justify-content-md-end">
  <span style={{paddingTop:".6em"}} ><Search  {...props}  handleChange={handleChange} /></span>
  <span style={{margin:".1em"}}>
<Accounts/>
      </span>
  
  </div>
 </Col>
</Row>
}

// className="btn btn-secondary btn-block" 

// className="btn btn-secondary btn-block"
   
   
