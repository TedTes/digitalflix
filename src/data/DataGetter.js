import {DataTypes} from './Types'
import React,{useEffect} from 'react';
import {categories} from './Categories';
import {useDispatch} from 'react-redux';
import { loadData } from "../data/ActionCreators";
// import {Shop} from '../shop/Shop';

export default function DataGetter(props){

 const rtData={ 
                 "$skip": ((props.match.params.page*props.pageSize)-(props.pageSize))||0,
                 "category.name": categories.find(cat=>cat.toLowerCase()===props.match.params.category),
                   }

                   if(props.data){
                   rtData["name[$like]"] =`*${props.data}*`
                   }
             const dispatch=useDispatch();
       useEffect(()=>{
            dispatch(loadData(DataTypes.PRODUCTS,rtData))
           },[dispatch, rtData])
        return <React.Fragment> {props.children}  </React.Fragment>
}