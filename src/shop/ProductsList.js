import React, { Component } from "react";
import {Link} from "react-router-dom";
import '../styles.css';
export class ProductsList extends Component {

render() {
if (this.props.products == null || this.props.products.length === 0) {
return <h5 className="p-2">No Products</h5>
}
return this.props.products.filter(p=>p.image!=="Not Found").map((p) =>
<div key={p.id} className="card-text bg-white p-1 d-grid">
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
onClick={ () => this.props.addToCart(p) } >
Add To Cart
</button>
</span></h4>
</div>
)
}
}