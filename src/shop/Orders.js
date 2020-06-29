import React,{useState,useEffect} from 'react'
import {useDispatch} from 'react-redux';
import {ordersList} from '../data/ActionCreators';
import {Table} from 'react-bootstrap';
export default function Orders(props){
    const dispatch=useDispatch();
    const[data,setData]=useState([]);
    useEffect(()=>dispatch(ordersList()),[])
    useEffect(()=>setData(props.ordersList),[props.ordersList])
    return(<div className="orders_table">
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Address</th>
      <th>City</th>
      <th>Zip</th>
      <th>Country</th>
    </tr>
  </thead>
  <tbody>
    {data.map((order,index)=>(<tr key={index}>
      <td>{order.name}</td>
      <td>{order.email}</td>
      <td>{order.address}</td>
      <td>{order.city}</td>
      <td>{order.zip}</td>
      <td>{order.country}</td>
    </tr>))}
  </tbody>
</Table>
        </div>
    )
}