import {ActionTypes,DataTypes} from "./Types.js";
import {categories} from "./Categories.js";
// import {data as dt} from './data.js';
import RestDataSource from './RestDataSource';


const dataSource=new RestDataSource();
// As a best practice in Redux we wrap every action within a function, 
// so that object creation is abstracted away.Such function takes the name of action creator:
export const loadData = (dataType, params) => (
   {
   type: ActionTypes.DATA_LOAD,
   payload:dataType==="products"? dataSource.GetData(dataType, params).then(response =>
   ({ dataType,
   data: Object.values(response.data["data"]),
   total: 500,
   params
   })
   ):{dataType,data:categories}
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

   // Number(response.headers["content-length"])

//   const checkType=(response)=>{
//       console.log(Object.values(response.header["content-length"])) 
//    }