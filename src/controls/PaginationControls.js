import React, { Component } from "react";
import { PaginationButtons } from "./PaginationButtons";
export class PaginationControls extends Component {
constructor(props) {
super(props);
this.pageSizes = [ 10, 25];
this.sortKeys =  ["Name", "Price"];

}
handlePageSizeChange = (ev) => {
this.props.setPageSize(ev.target.value);
}
handleSortPropertyChange = (ev) => {
this.props.setSortProperty(ev.target.value);
}
render() {
return <div className="m-2">
<div className="text-center m-1">
<PaginationButtons currentPage={this.props.currentPage}
pageCount={this.props.pageCount}
navigate={ this.props.navigateToPage }/>
</div>
<div className="form-inline justify-content-center">
<select className="form-control"
onChange={ this.handlePageSizeChange }
value={ this.props.pageSize|| this.pageSizes[0] }>
{ this.pageSizes.map((s,index) =>
<option value={s} key={index}>{s} per page</option>
)}
</select>
<select className="form-control"
onChange={ this.handleSortPropertyChange }
value={ this.props.sortKey || this.sortKeys[0] }>
{ this.sortKeys.map((k,index) =><option value={k.toLowerCase()} key={index}>
Sort By { k }
</option>
)}
</select>
</div>
</div>

}
}