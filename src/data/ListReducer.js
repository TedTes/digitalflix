import {ActionTypes,DataTypes} from './Types.js'

export const ListReducer=(dataStore={pageSize:10},action)=>{
    switch(action.type){
        case ActionTypes.DATA_LOAD:
        return({
             ...dataStore,
             [action.payload.dataType]:action.payload.data,
             [`${action.payload.dataType}_total`]: action.payload.total,
             [`${action.payload.dataType}_params`]: action.payload.params,
        })
        case ActionTypes.DATA_SET_PAGESIZE:
            return{...dataStore,pageSize:action.payload}
        case ActionTypes.DATA_SET_SORT_PROPERTY:
            return{...dataStore,sortKey:action.payload}

        case ActionTypes.DATA_STORE:
          if(action.payload.dataType===DataTypes.ORDERS)
          return {...dataStore,order:action.payload.data}
          break;
       default:
           return dataStore || {}
    }
    
}