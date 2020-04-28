import {createStore,applyMiddleware} from 'redux';
import {ListReducer} from './ListReducer';
import {CartReducer} from './CartReducer';
import {CommonReducer} from './CommonReducer';
// import {loadData} from './ActionCreators'
import {asyncAction} from './asyncMiddleware';


export const dataStore=createStore(CommonReducer(ListReducer,CartReducer),applyMiddleware(asyncAction));