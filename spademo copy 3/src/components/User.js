import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import { Login } from './Login';
import { Register } from './Register';
export const User = (props)=>{
    return (
        <div>
            <h2>User</h2>
            <h3>User Operations</h3>
            <NavLink to="/user/login">Login</NavLink>
            &nbsp;
            <NavLink to="/user/register">Register</NavLink>
            <hr/>
            <Switch>
                <Route path="/user/login" component={Login}/>
                <Route path="/user/register" component={Register}/>
            </Switch>
        </div>
    );
}