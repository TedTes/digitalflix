import {createStore,applyMiddleware} from 'redux';
import {ListReducer} from './ListReducer';
import {CartReducer} from './CartReducer';
import {CommonReducer} from './CommonReducer';
// import {loadData} from './ActionCreators'
import {asyncAction} from './asyncMiddleware';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    blacklist:['products']
  }
  
    const persistedReducer = persistReducer(persistConfig, CommonReducer(ListReducer,CartReducer))
   
  
export const dataStore=createStore(persistedReducer,applyMiddleware(asyncAction));
export const persistor=persistStore(dataStore)