import React from 'react';
export const Input = (props)=>{
    //console.log('Input ReRender ',props);
    var pmsg = `Type ${props.name} Number Here`;
    return (<div className='form-group'>
        <label>{props.name} Number</label>
        <input id={props.name} type='text' onKeyUp={props.input} placeholder={pmsg} className='form-control'/>
    </div>)
}