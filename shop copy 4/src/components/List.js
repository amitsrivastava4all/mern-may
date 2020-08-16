import React from 'react';
import { Item } from './children/Item';
export const List = (props)=>{
    console.log('Props are ::::::',props, ' typeof ',typeof props.items);
    //return (<h1>fghdsgfjds</h1>)
    if(props.items && props.items.length>0){
    return (
        <>
        {props.items.map(item=>{
            return (<Item item = {item}/>);
        })}
        </>

    );
    }
    else{
        return (<div>No Record Found....</div>)
    }

}