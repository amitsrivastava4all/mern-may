import React from 'react';
import { Header } from '../components/Header';
import { LABELS } from '../utils/constants';
export class Shop extends React.Component{
constructor(props){
    super(props);
    this.state = {};
}
render(){
    return (<div>
            <h1 className='alert-info text-center'>Shop Demo</h1>
            <Header brandName = {LABELS.BRANDNAME}/>
        </div>);
}
}