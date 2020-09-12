import {createStore, applyMiddleware, combineReducers} from 'redux';
import { userOperations } from './reducers/useroperations';
import { customerOperations } from './reducers/customeroperations';
import { LoggerMiddleware } from './middlewares/logger';
export const store= createStore(userOperations,applyMiddleware(LoggerMiddleware));
//export const store = createStore(combineReducers(userOperations,customerOperations),applyMiddleware(LoggerMiddleware));
store.subscribe(()=>{
    console.log('Store Update .... ',store.getState());
})
