import React from 'react';
import {DataTypes} from '../data/Types'
export  class Description extends React.Component{
    constructor(props){
   super(props);
   this.state={
       showModule:false,
       data:[]
   }
    }
componentDidMount(){
    const id=this.props.match.params;
    console.log(id)
const data=this.props.loadData(DataTypes.PRODUCTS,id)
console.log(data)
this.setState({data})
}
    render(){
        
        // let id=this.props.match.params.id
             return <div>
              {console.log(this.state.data)}
             </div>
           }
        
           

    
      
}