import React from 'react';
import {MYHOC} from '../models/hoc/convert';
 const Home = (props)=>{
    return (
        <div>
            <h2>Home X is {props.x} Y is {props.y}</h2>
        </div>
    );
}
export const NewHome = MYHOC(Home);