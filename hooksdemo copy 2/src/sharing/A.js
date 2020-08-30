import { B } from "./B";
import React from 'react';
import {common} from './common';
export const A = (props)=>{
    const callMe = (str)=>{
        console.log('Call Me From Child ',str );
    }
    let name = 'Amit Srivastava';
    let company = 'Brain Mentors';
    let obj = {
        name, company,callMe
    };
    return (
        <div>
            A Throw the Data
            <common.Provider value={obj}>
            <B/>
            </common.Provider>
        </div>
    )
}