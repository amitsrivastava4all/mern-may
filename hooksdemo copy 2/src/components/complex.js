import React from 'react';
import {useState} from 'react';
export const Complex = (props)=>{
    let cityTxt = '';
    const [state,setState]= useState({id:1001, name:'Amit',address:'Delhi'});
    const changeIt = (city)=>{
        setState({...state,address:city});
    }
    const takeInput = (evt)=>{
        cityTxt = evt.target.value;
        console.log('City is ',cityTxt);
    }
    return (
        <div>
            <input type='text' onChange={takeInput} placeholder='Type City'/>
            {props.name}
            <button onClick={()=>{
                changeIt(cityTxt);
            }}>Address Change It</button>
    <p>State is {state.id} {state.name} {state.address}</p>
        </div>
    );
}
