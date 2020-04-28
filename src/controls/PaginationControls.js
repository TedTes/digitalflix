import React  from "react";
import { PaginationButtons } from "./PaginationButtons";
export function PaginationControls(props){
// constructor(props) {
// super(props);
// this.pageSizes = [ 10, 25];
// this.sortKeys =  ["Name", "Price"];

// }
// const handlePageSizeChange = (ev) => {
// props.setPageSize(ev.target.value);
// }
// const handleSortPropertyChange = (ev) => {
// props.setSortProperty(ev.target.value);
// }

return <div className="m-2">
<div className="text-center m-1">
<PaginationButtons currentPage={props.currentPage}
pageCount={props.pageCount}
navigate={ props.navigateToPage }/>
</div>
{/* <div className="form-inline justify-content-center"> */}
{/* <select className="form-control"
onChange={ this.handlePageSizeChange }
value={ this.props.pageSize|| this.pageSizes[0] }>
{ this.pageSizes.map((s,index) =>
<option value={s} key={index}>{s} per page</option>
)}
</select> */}
{/* <select className="form-control"
onChange={ this.handleSortPropertyChange }
value={ this.props.sortKey || this.sortKeys[0] }>
{ this.sortKeys.map((k,index) =><option value={k.toLowerCase()} key={index}>
Sort By { k }
</option>
)}
</select> */}
</div>
// </div>

}
