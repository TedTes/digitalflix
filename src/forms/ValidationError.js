import React from "react";
export function ValidationError(props) {

if (props.errors) {
return props.errors.map(err =>
<h6 className="text-danger" style={{position:"absolute",margin:"1em,0",padding:".2em",fontSize:".8em",fontWeight:"bold"}}key={err}>
{ err }
</h6>
)
}
return null;
}
