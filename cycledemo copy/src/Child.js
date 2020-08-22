import React from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

export default class Child extends React.Component{
  constructor(props){
    super(props);
    this.state = {b:2};
    console.log('Child Constructor Call');
  }
  static getDerivedStateFromProps(props, state){
    state.b=state.b * props.c;
    console.log('Child If Props Update to Sync State ',state.b);
    return state;
  }
  render(){
    console.log('Child Render Call');
    return(
      <div>
        B is {this.state.b}
      </div>
    )
  }
  componentDidMount(){
    console.log('Child Call After Render');
  }
}
Child.defaultProps = {
    c:1000
}
Child.propTypes  = {
    //c:PropTypes.number.isRequired
    c:PropTypes.number
}