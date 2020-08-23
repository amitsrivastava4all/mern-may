import React from 'react';
export const Item = (props)=>{
    const myStyle = {
        width:'18rem'
    };
    return (
        <div className="card" style={myStyle}>
  <img src={props.item.url} className="card-img-top" alt="No Image Found"/>
  <div className="card-body">
    <h5 className="card-title">{props.item.id}</h5>
    <p className="card-text">{props.item.name}</p>
    <p className="card-text">{props.item.price}</p>
    <a href="#" className="btn btn-primary">Add to Cart</a>
  </div>
</div>
    )
}