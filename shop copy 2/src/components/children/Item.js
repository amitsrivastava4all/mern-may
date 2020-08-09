import React from 'react';
export const Item = (props)=>{
    const myStyle = {
        width:'18rem'
    };
    return (
        <div className="card" style={myStyle}>
  <img src={props.url} className="card-img-top" alt="No Image Found"/>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">{props.descr}</p>
    <a href="#" className="btn btn-primary">Add to Cart</a>
  </div>
</div>
    )
}