import { ActionTypes } from "./Types"

export const UserReducer=(action,dataStore)=>{
  console.log("from userReducer")
  const newStore={user:[],...dataStore}
    if(action.type===ActionTypes.LOGIN){
      return([...newStore.user,action.payload]) 
    }
    else
    return newStore || {}
}