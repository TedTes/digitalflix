import {createStore,applyMiddleware} from 'redux';
import {ListReducer} from './ListReducer';
import {CartReducer} from './CartReducer';
import {CommonReducer} from './CommonReducer';
import {asyncAction} from './asyncMiddleware';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

const persistConfig = {
    key: 'root',
    storage,
    blacklist:['products'],
    stateReconciler: hardSet,
  }
  const persistedReducer = persistReducer(persistConfig, CommonReducer(ListReducer,CartReducer))
  
  
export const dataStore=createStore(persistedReducer,applyMiddleware(asyncAction));
export const persistor=persistStore(dataStore)
