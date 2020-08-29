import React from 'react';
import {useState} from 'react';
export const Plus = (props)=>{
    const [result,setState]= useState(0);
    const doPlus = ()=>{
        setState(result+1);
    }
    return (
        <div>
            {props.name}
            <button onClick={doPlus}>Plus</button>
    <p>Plus is {result}</p>
        </div>
    );
}
