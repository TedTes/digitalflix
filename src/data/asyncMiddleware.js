const isPromise=(payload)=>
  (typeof(payload)==="function" || typeof(payload)==="object") && typeof(payload.then)=="function"


export const asyncAction=()=>(next)=>(action)=>{
    if(isPromise(action.payload)){
        action.payload.then(result=>next({...action,payload:result}))
    }else next(action)
}