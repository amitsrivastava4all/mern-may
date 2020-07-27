import React from 'react';
import './Header.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
const Header = (props)=>{
    return (
        <div>
            <Button variant="primary">Hello {props.myname}</Button>
    <p>Age is {props.age}</p>
    <p>City is {props.city}</p>
        </div>
    )
}
export default Header;