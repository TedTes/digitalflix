import React from "react";
export default function Search(props){

 const handleChange=(e)=>{
props.handleChange(e.target.value)
 }


        return(
            <React.Fragment>
              
                <input className="input" type="text" width='40' placeholder="search" onChange={handleChange}/>
            
     </React.Fragment>
        )
    }
