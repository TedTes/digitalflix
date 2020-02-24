import {DataTypes} from './Types'
import React from 'react';
import {categories} from './Categories';
import {Shop} from '../shop/Shop';

export default class DataGetter extends React.Component{
    render(){
        return <React.Fragment>
            {this.props.children}</React.Fragment>
    }
   
 componentDidMount=()=>this.getData();
 componentDidUpdate=()=>this.getData();


getData=()=>{
    const dsData = this.props.products_params || {} ;
    const rtData = {
        $limit:this.props.pageSize,
        // `${sort[this.props.sortKey]}`=
        $skip: ((this.props.match.params.page*this.props.pageSize)-(this.props.pageSize))||0,
        "category.name":this.checkType(this.props.match.params.category)
}
if (Object.keys(rtData).find(key => dsData[key] !== rtData[key])) {
    this.props.loadData(DataTypes.PRODUCTS, rtData);
}

}
 checkType(category){
    return categories.find(cat=>cat.toLowerCase()===category)
   
}
}
