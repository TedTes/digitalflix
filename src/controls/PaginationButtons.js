import React  from "react";
export function PaginationButtons(props) {
const getPageNumbers = () => {
if (props.pageCount < 4) {
    return [...Array(props.pageCount + 1).keys()].slice(1);
} else if (props.currentPage <= 4) {
return [1, 2, 3, 4, 5];
} else if (props.currentPage > props.pageCount - 4) {
return [...Array(5).keys()].reverse().map(v => props.pageCount - v);
} else {
return [props.currentPage -1, props.currentPage,props.currentPage + 1];
}
}

const current = props.currentPage;
const pageCount = props.pageCount;
const navigate = props.navigate;
return <React.Fragment>
<button onClick={ () => navigate(current - 1) }
disabled={ current === 1 } className="btn btn-secondary mx-.5">
Prev
</button>
{ current > 4 &&
<React.Fragment>
<button className="btn btn-secondary mx-1"
onClick={ () => navigate(1)}>1</button>
<span className="h4">...</span>
</React.Fragment>
}
{ getPageNumbers().map((num,index) =>
<button className={ `btn mx-1 ${num === current ? "btn-primary": "btn-secondary"}`}
onClick={ () => navigate(num)} key={ index }>
{ num }
</button>)}
{ current <= (pageCount - 4) &&
<React.Fragment>
<span className="h4">...</span>
<button className="btn btn-secondary mx-1"
onClick={ () => navigate(pageCount)}>
{ pageCount }
</button>
</React.Fragment>
}
<button onClick={ () => navigate(current + 1) }
disabled={ current === pageCount }
className="btn btn-secondary mx-.5">
Next
</button>
</React.Fragment>
}
