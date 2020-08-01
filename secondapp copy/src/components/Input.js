import React from 'react';
export const Input = (props)=>{
    var pmsg = `Type ${props.name} Number Here`;
    return (<div className='form-group'>
        <label>{props.name} Number</label>
        <input type='text' placeholder={pmsg} className='form-control'/>
    </div>)
}