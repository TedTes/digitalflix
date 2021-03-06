import React,{useState,useEffect} from 'react';
import {useDispatch} from 'react-redux';
import Axios from 'axios'
import Header from './Header';
import { addToCart } from "../data/CartActionCreators";
import '../styles.css'
// import {DataTypes} from '../data/Types'
export  function Description(props){
  
const dispatch=useDispatch();
const[data,setData]=useState([])
useEffect(()=>{
    // const url=`http://localhost:3030/products/${props.match.params.id}`
    const url=`https://apiecom.herokuapp.com/products/${props.match.params.id}`
    Axios.request({method:"get",url:url}).then(response=>setData(response.data))
    // console.log(data)
   
},[])
             return <div >
                 <div><Header {...props}/></div>
                 <div className="d-flex item-page">
                    
                     <img src={data.image} alt=""/>
                
                        <div className="description">
                       <ul>
                         <li>{data.name}</li>
                         <li>{data.description}</li>
                 </ul>
                 <div className="price-cta">
                 <h1>${data.price}</h1>
                 <button className="btn btn-lg btn-primary"
                onClick={ () => dispatch(addToCart(data)) } >
                      Add To Cart
                        </button>
                 </div>
                </div>
               </div>
             </div> 
           }