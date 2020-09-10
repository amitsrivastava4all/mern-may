import React from 'react';
export const News = (props)=>{
    return (
        <div>
            <h2>News {props.match.params.type} &nbsp; {props.match.params.subtype}</h2>
        </div>
    );
}