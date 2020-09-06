import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import './Header.css';
export const Header = (props)=>{
    let sports = '/news/Sports/IPL-2020';
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link> &nbsp;
                        <NavLink activeClassName="active" to={{pathname:'/about',search:'?name=Amit&company=BrainMentors'}}>About</NavLink>
                        &nbsp;
                        <NavLink to="/user">User</NavLink>
                        &nbsp;
                        <NavLink to={sports}>News</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}