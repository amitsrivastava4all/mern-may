import React from 'react';
import { Header } from '../components/Header';
import { LABELS } from '../utils/constants';
import { List } from '../components/List';
export class Shop extends React.Component{
constructor(props){
    super(props);
    this.state = {};
    console.log('Shop Constructor call');
}
// static getDerivedStateFromProps(props, state){
//     console.log('getDerivedStateFromProps Call');
//     return state;
// }
UNSAFE_componentWillMount(){
    setTimeout(()=>{
        console.log('I am Async and i call later');
        this.setState({msg:'Set'});
    },5000);
    // Call (AJAX ) Async + setState
    console.log('Will Mount Call');
}
render(){
    console.log('Render Call');
    return (<div>
            <h1 className='alert-info text-center'>Shop Demo</h1>
            <Header brandName = {LABELS.BRANDNAME}/>
            <List/>
        </div>);
}
componentDidMount(){
    setTimeout(()=>{
        console.log('I am Async and i call later');
        this.setState({msg:'Set'});
    },5000);
    console.log('Did Mount');
}
}