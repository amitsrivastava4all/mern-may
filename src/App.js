import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
//export
 function App(){
   var name = 'Amit';
   var age = 21;
   var city = ["delhi","mumbai","pune"];
   return (
   <div>
      <Header myname={name} age={age} city={city}/>
     <h1>I am React , I am App {name}</h1>
      <Footer/>
     </div>);
  //return <h1>I am React I am App</h1>;
  //return <input type='text'/>;
  //let object = React.createElement('input',{type:'text',id:'eid'});
  //let object=  React.createElement('h1',{className:'red'},null,`I am React I am App ${name}`);
  //React.createElement('div',{className:'red'},React.createElement('h1',null, 'Hello React'));
  //console.log('Type of ',typeof object);
  //return object;
  // var object =React.createElement('h1');
  // return object;
}
export default App;