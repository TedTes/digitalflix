import React from "react";
import {useDispatch} from 'react-redux';
import {Link} from "react-router-dom";
import { addToCart } from "../data/CartActionCreators";
import '../styles.css';
export function ProductsList(props) {

const dispatch=useDispatch();
if (props.products == null || props.products.length === 0) {
return <h5 className="p-2"><div className="isLoading"></div></h5>
}
return props.products.filter(p=>p.image!=="Not Found").map((p) =>
<div key={p.id}>
  <div>
    {/* <Description product={p}/> */}
    <Link  to={`/shop/description/${p.id}`} params={p.id} target="_blank">
    <img src={p.image} height="100" width="100" alt="" /><br/>
  { p.name }
   </Link>
   </div>
 <h4><span>
<div>${ p.price.toFixed(2) }</div>
<button className="btn btn-sm btn-primary"
onClick={ () => dispatch(addToCart(p)) } >
Add To Cart
</button>
</span></h4>
</div>
)


}
