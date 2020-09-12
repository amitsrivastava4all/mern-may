import React from 'react';
import {connect} from 'react-redux';
const About = (props)=>{
    let query = props.location.search;
    const url =new URLSearchParams(query);
    let value = '';
    for(let param of url.entries()){
        value +=param;
    }
    return (
        <div>
            <h2>About {value}</h2>
    <p>User Info is {props.userinfo.userid}</p>
    <br/>
    {props.userinfo.password}
        </div>
    );
}

const mapStateToProps = state =>{
    return {
        userinfo: state.userInfo
    }
}
export default connect(mapStateToProps)(About);
//const fn = connect(mapStateToProps)
//export const fn2 = fn(About);

