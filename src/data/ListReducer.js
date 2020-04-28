import {ActionTypes,DataTypes} from './Types.js'

export const ListReducer=(dataStore={pageSize:25},action)=>{
    switch(action.type){
        case ActionTypes.DATA_LOAD:
        return({
             ...dataStore,
             [action.payload.dataType]:action.payload.data,
             [`${action.payload.dataType}_total`]: action.payload.total,
             [`${action.payload.dataType}_params`]: action.payload.params,
        })
        case ActionTypes.DATA_SET_PAGESIZE:
            return ({...dataStore,pageSize:action.payload})
        case ActionTypes.DATA_SET_SORT_PROPERTY:
            return ({...dataStore,sortKey:action.payload})

        case ActionTypes.DATA_STORE:
          if(action.payload.dataType===DataTypes.ORDERS)
          return ({...dataStore,orders:action.payload.data})
          break;
        case ActionTypes.CREATE_ACCOUNT:
            return ({...dataStore,[action.payload.dataType]:action.payload.data})
        case ActionTypes.LOGIN:
            return ({...dataStore,user:action.payload})
       default:  return dataStore || {}
    }
    
}