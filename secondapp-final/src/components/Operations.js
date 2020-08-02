import { Buttons } from "./Buttons"
import React from 'react';
export const Operations = (props)=>{
    return (<>
        <Buttons operation={props.compute} name="+" class='btn btn-primary mr-2'/>
        <Buttons operation={props.compute} name="-" class='btn btn-info mr-2'/>
        <Buttons operation={props.compute} name="*" class='btn btn-danger mr-2'/>
        <Buttons operation={props.compute} name="/" class='btn btn-success'/>
    </>)
}