import React,{Component} from 'react';
import { Input } from '../components/Input';
import { Operations } from '../components/Operations';
import {Output} from '../components/Output';
export class Calc extends Component{

    constructor(props){
        super(props); // Calling Parent Class (Component) Constructor
        this.firstNumber = 0; // Instance Variable
        this.secondNumber = 0;
        this.result = 0;
        this.numberObject = {

        };
        this.state = {result:this.result};
    }

    takeInput(event){
        this.numberObject[event.target.id]=event.target.value;
        //var value = event.target.value;
        //var key = event.target.id;
        //this.numberObject[key]=value;
        console.log('Object is ',this.numberObject);
       // console.log('Take Input Called ',event.target.value);
        //console.log('This is',this);
        /*
        if(event.target.id=='first'){
            this.firstNumber = event.target.value;
        }
        else
        if(event.target.id=='second'){
            this.secondNumber = event.target.value;
        }

        console.log('First Number is ',this.firstNumber);
        console.log('Second Number is ',this.secondNumber);
        */
    }
    // takeInput2(event){
    //     console.log('Take Input Called ',event.target.value);
    //     console.log('This is',this);
    //     this.secondNumber = event.target.value;
    //     console.log('SecondNumber Number is ',this.secondNumber);
    // }
    calc(operation){
        this.result = eval(this.numberObject.first + operation + this.numberObject.second);
        console.log('Result is ',this.result);

        this.setState({result:this.result});
        // if(operation=='+'){
        //     this.result = this.firstNumber + this.secondNumber;
        // }
    }

render(){
    console.log('Render Call');
    return (<div className='container'>
        <h1 className='alert-info text-center'>Calc Example</h1>
        <Input name='first' input = {this.takeInput.bind(this)}/>
        <Input name='second' input = {this.takeInput.bind(this)}/>
        {/* <Input name='second' input = {this.takeInput2.bind(this)}/> */}
        <Operations compute = {this.calc.bind(this)}/>
        <br/>
        <br/>
        <Output result = {this.state.result}/>
    </div>);
}
}