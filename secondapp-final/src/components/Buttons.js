import React from 'react';
export const Buttons = (props)=>{
return <button onClick={()=>props.operation(props.name)} className={props.class}>{props.name}</button>;
}