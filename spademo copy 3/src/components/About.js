import React from 'react';
export const About = (props)=>{
    let query = props.location.search;
    const url =new URLSearchParams(query);
    let value = '';
    for(let param of url.entries()){
        value +=param;
    }
    return (
        <div>
            <h2>About {value}</h2>
        </div>
    );
}