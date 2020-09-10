import React, { useRef } from 'react';
import { userActions } from '../models/actions/useractions';
import { store } from '../models/store';

export const Register = (props)=>{
    const userid = useRef('');
    const pwd = useRef('');
    const name = useRef('');
    const city = useRef('');
    const takeInput = (evt)=>{
         const type = userActions.REG ;
         const payLoad = {
             'userid': userid.current.value, 'password':pwd.current.value,
             'name':name.current.value, 'city':city.current.value
         }
         console.log('PayLoad is ',payLoad);
         store.dispatch({type,payLoad});
    }
    return (
        <div>
            <h2>Register</h2>
            <input type='text' ref={userid} placeholder='Type Userid'/>
            <br/>
            <input type='text' ref={pwd} placeholder='Type Password'/>
            <br/>
            <input type='text' ref={name} placeholder='Type Name'/>
            <br/>
            <input type='text' ref={city}  placeholder='Type City'/>
            <br/>
            <button onClick={takeInput}>Register</button>
        </div>
    );
}