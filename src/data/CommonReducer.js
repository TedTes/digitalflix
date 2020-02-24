export const CommonReducer=(...reducers)=>(dataStore,action)=>{
    for(let i=0;i<reducers.length;i++){
        let newStore=reducers[i](dataStore,action)
        if(newStore!==dataStore)
        return newStore;
    }

    return dataStore;
}