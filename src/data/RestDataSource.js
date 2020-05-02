import {RestUrls} from './Urls';
import Axios from 'axios';

export default class RestDataSource{

GetData(datatype,params){
      return this.sendRequest("get",RestUrls[datatype],params);
     }

     StoreData=(datatype,data)=>this.sendRequest("post",RestUrls[datatype],{},data)
     
    
     sendRequest=(method,url,params,data)=>Axios.request({method,url,params,data})
 }

