import {RestUrls} from './Urls';
import Axios from 'axios';

export default class RestDataSource{

GetData(datatype,params){
  
      return this.sendRequest("get",RestUrls[datatype],params);
     }

     StoreData=(datatype,data)=>this.sendRequest("post",RestUrls[datatype],{},data)
        
     
 sendRequest=async(method,url,params,data)=>{
    return await Axios.request({method,url,params,data})
 }      
 }

