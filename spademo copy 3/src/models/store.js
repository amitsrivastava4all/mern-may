import {createStore} from 'redux';
import { userOperations } from './reducers/useroperations';
export const store= createStore(userOperations);
store.subscribe(()=>{
    console.log('Store Update .... ',store.getState());
})
