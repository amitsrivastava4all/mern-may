import React from 'react';
import { Header } from '../components/Header';
import { LABELS } from '../utils/constants';
import { List } from '../components/List';
import {getData} from '../utils/ajax';
export class Shop extends React.Component{

constructor(props){
    super(props);
    this.state = {items:[]};
    console.log('Shop Constructor call');
}

/*shouldComponentUpdate(prevProps, prevState) {
console.log('Prev State is ',prevState);
}*/

/*
static async getDerivedStateFromProps(props, state){
    console.log('Shop ',this);
    if( localStorage.items){
    //this.setState({items:localStorage.items});
    state = {items:JSON.parse(localStorage.items)['mobiles']};
    }
    else{
    var response= await getData();
    console.log('Response on Life Cycle '
    ,response.data['mobiles']);
    localStorage.items =
    JSON.stringify(response.data);
    state = {items:response.data['mobiles']};
    //this.setState({items:response.data['mobiles']});
    }
    // promise.then(response=>{
    //     console.log('Response of Axios is ',response);
    //     }).catch(err=>{
    //     console.log('Error is ',err);
    //     }).finally(()=>{
    //     console.log('this code always run');
    //     });
    console.log('getDerivedStateFromProps Call ',state
    , ' Props ',props );
    return state;
}*/
/*
UNSAFE_componentWillMount(){
    setTimeout(()=>{
        console.log('I am Async and i call later');
        this.setState({msg:'Set'});
    },5000);
    // Call (AJAX ) Async + setState
    console.log('Will Mount Call');
}*/
render(){
    console.log('Render Call :::::: ',this.state.items);
    return (<div>
            <h1 className='alert-info text-center'>Shop Demo</h1>
            <Header brandName = {LABELS.BRANDNAME}/>
            <List items = {this.state.items}/>
        </div>);
}
async componentDidMount(){
    console.log('componentWillMount:::::');
    if( localStorage.items){
        this.setState({items:
            JSON.parse(localStorage.items)['mobiles']});
        //state = {items:JSON.parse(localStorage.items)['mobiles']};
        }
        else{
        var response= await getData();
        console.log('Response on Life Cycle '
        ,response.data['mobiles']);
        localStorage.items =
        JSON.stringify(response.data);
        //state = {items:response.data['mobiles']};
        this.setState({items:response.data['mobiles']});
        }

}
}