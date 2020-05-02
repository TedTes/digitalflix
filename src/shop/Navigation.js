import React,{useState} from "react";
import Search from './Search'
import {Navbar,Nav,Col,Row} from 'react-bootstrap'
import Accounts from '../authentication/Accounts';
import '../styles.css';

export function Navigation(props){
const[toggle,setToggle]=useState(0);
  const handleChange=(e)=>{
        props.handleChange(e);
        }
const handleClick=()=>{
 setToggle(!toggle);
 const wrapper=document.getElementById("menu")
wrapper.classList.toggle("dropdown")
setTimeout(()=>wrapper.classList.remove("dropdown"),2500)
}
return  <div >

<div id="svg-icon" onClick={handleClick}><svg className="svg-icon"  viewBox="0 0 20 20">
							<path  d="M1.683,3.39h16.676C18.713,3.39,19,3.103,19,2.749s-0.287-0.642-0.642-0.642H1.683
								c-0.354,0-0.641,0.287-0.641,0.642S1.328,3.39,1.683,3.39z M1.683,7.879h11.545c0.354,0,0.642-0.287,0.642-0.641
								s-0.287-0.642-0.642-0.642H1.683c-0.354,0-0.641,0.287-0.641,0.642S1.328,7.879,1.683,7.879z M18.358,11.087H1.683
								c-0.354,0-0.641,0.286-0.641,0.641s0.287,0.642,0.641,0.642h16.676c0.354,0,0.642-0.287,0.642-0.642S18.713,11.087,18.358,11.087z
								 M11.304,15.576H1.683c-0.354,0-0.641,0.287-0.641,0.642s0.287,0.641,0.641,0.641h9.621c0.354,0,0.642-0.286,0.642-0.641
								S11.657,15.576,11.304,15.576z"></path>
						</svg></div>
   <ul>
   <li  id="menu" className="horizontal-menu" >
 <a href={props.baseUrl } className="links text-white text-decoration-none">All</a>
{ props.categories && props.categories.map(cat =>
<a key={ cat } href={ `${props.baseUrl}/${cat.toLowerCase()}`} className="links text-white text-decoration-none">
{ cat}
</a> 
)}  
   </li>
 </ul> 


  
<div className="sea-acc">
<Search  {...props}  handleChange={handleChange} />
 <Accounts/>
</div>
  </div>
}







   
   
