import React from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './Child';

export default class App extends React.PureComponent{
  constructor(props){
    super(props);
    this.state = {a:1, w:1};
    console.log('Constructor Call');
  }
  static getDerivedStateFromProps(props, state){
    state.a=2;
    console.log('If Props Update to Sync State ',state.a);
    return state;
  }
  shouldComponentUpdate(nextProps, nextState){
    if(nextState.w<10){
      return false;
    }
      // if(this.state.w==nextState.w){
      //   return false;
      // }
      return true;
  }
  takeInput(event){
    let wVal = this.state.w;
    wVal++;
    let val = event.target.value;
    console.log('Parent Set State Call....',val
    ,' W is ',wVal);
    this.setState({a:val,w:wVal});
  }
  render(){
    console.log('Render Call');
    return(
      <div>
        A is {this.state.a}
        <input type='text' onChange={this.takeInput.bind(this)} placeholder='Type Number Here'/>
        <br/>
        <Child c = {this.state.a}/>
        {/* <Child c={this.state.a}/> */}
        <Child/>
      </div>
    )
  }
  componentDidMount(){
    console.log('Call After Render');
  }
}
