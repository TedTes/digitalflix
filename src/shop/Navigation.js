import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../styles.css'
export class Navigation extends Component {
render() {
return <React.Fragment >
    <Link to={ this.props.baseUrl } className="text-white text-decoration-none">All</Link>
{ this.props.categories && this.props.categories.map(cat =>
<Link key={ cat } to={ `${this.props.baseUrl}/${cat.toLowerCase()}`} className="text-white text-decoration-none">
{' '}|{' '}{ cat}
</Link> 
)}

   </React.Fragment>
}
}
// className="btn btn-secondary btn-block" 

// className="btn btn-secondary btn-block"
   
   
