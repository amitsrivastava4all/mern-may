import React,{Component} from 'react';
import { Input } from '../components/Input';
import { Operations } from '../components/Operations';
import {Output} from '../components/Output';
export class Calc extends Component{

render(){
    return (<div className='container'>
        <h1 className='alert-info text-center'>Calc Example</h1>
        <Input name='First'/>
        <Input name='Second'/>
        <Operations/>
        <br/>
        <br/>
        <Output/>
    </div>);
}
}