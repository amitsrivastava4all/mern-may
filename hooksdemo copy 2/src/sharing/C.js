import React from 'react';
import {useRef} from 'react';
import {common} from './common';
export const C = (props)=>{
    const x = useRef();
    return (<div>
        <common.Consumer>
            {
                value=>{
                    console.log('Value is ',value);
                    return (
                    <>
                    <h1>I am C {value.name} {value.company}</h1>
                    <input type='text' ref={x}
                    placeholder='Send to Parent'/>
                    <button onClick={()=>{
                        value.callMe(x.current.value);
                    }}>Call Parent</button>
                    </>
                    )
                }
            }

        </common.Consumer>
    </div>);
}