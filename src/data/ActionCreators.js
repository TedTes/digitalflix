import {ActionTypes,DataTypes} from "./Types.js";
import {categories} from "./Categories.js";
// import {data as dt} from './data.js';
import RestDataSource from './RestDataSource';


const dataSource=new RestDataSource();
// As a best practice in Redux we wrap every action within a function, 
// so that object creation is abstracted away.Such function takes the name of action creator:
export const loadData = (dataType, params) => ({
   type: ActionTypes.DATA_LOAD,
   payload:dataType==="products"?
      (params.id ? dataSource.GetData(dataType,params).then(response=>({dataType,data:response,total:1,params}))
      :dataSource.GetData(dataType,params).then(response=>({ 
   dataType,
   data: Object.values(response.data["data"]),
   total: response.data.total,
   params
   })
   ))
   :{dataType,data:categories}
   })
   export const setPageSize=(newSize)=>({
      type:ActionTypes.DATA_SET_PAGESIZE,
      payload:newSize
   })
   
   export const setSortProperty=(newProp)=>({
      type:ActionTypes.DATA_SET_SORT_PROPERTY,
      payload:newProp
   })

 

   export const placeOrder=(order)=>({
      type:ActionTypes.DATA_STORE,
      payload:dataSource.StoreData(DataTypes.ORDERS,order)
      .then(response=>({dataType:DataTypes.ORDERS,payload:response.data}))
   })

  export const ordersList=()=>({
     type:ActionTypes.ORDERS_LIST,
     payload:dataSource.GetData(DataTypes.ORDERS_LIST).then(response=>({dataType:ActionTypes.ORDERS_LIST,payload:response.data}))
  })
   export const createAccount=(account)=>({
      type:ActionTypes.CREATE_ACCOUNT,
      payload:dataSource.StoreData(ActionTypes.CREATE_ACCOUNT,account).then(response=>({dataType:ActionTypes.CREATE_ACCOUNT,data:response.data}))
   })

   export const login=(account)=>({
      type:ActionTypes.LOGIN,
      payload:dataSource.StoreData(ActionTypes.LOGIN,account).then(response=>({data:response.data}))
   })

   export const logout=()=>({
      type:ActionTypes.LOGOUT,
      payload:{"authenticated":false}
   })

