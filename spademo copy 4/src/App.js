import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header';
import { Switch, Route ,useHistory} from 'react-router-dom';
//import { Home } from './components/Home';
import { NewHome } from './components/Home';
import  About  from './components/About';
import { News } from './components/News';
import { Login } from './components/Login';
import { User } from './components/User';
/*export default class App extends React.Component{
  // constructor(props){
  //   super(props);
  // }
render(){
  return (
    <div className="App">
     <h1>SPA Demo</h1>
     <Header/>
     <hr/>
     <button onClick={()=>{
       console.log('Props are ',this.props);
       //props.history.push("/");
     }}>Return to Home</button>
    <Switch>
      <Route exact path="/" component={Home}  />
      <Route path="/about" component={About}  />
      <Route path="/news/:type/:subtype" component={News}  />
      <Route path="/user" component={User}  />
      <Route render={()=>{
        return (<div>
          <h1>404 Wrong Link</h1>
        </div>);
      }}/>
    </Switch>
    </div>
  );
}
}*/

function App(props) {
  const hs = useHistory();
  console.log('HS is ',hs);
  return (
    <div className="App">
     <h1>SPA Demo</h1>
     <Header/>
     <hr/>
     <button onClick={()=>{
      // hs.goBack();
      hs.replace('/');
       //console.log(props);
       //props.history.push("/");
     }}>Return to Home</button>
    <Switch>
      <Route exact path="/" component={NewHome}  />
      <Route path="/about" component={About}  />
      <Route path="/news/:type/:subtype" component={News}  />
      <Route path="/user" component={User}  />
      <Route render={()=>{
        return (<div>
          <h1>404 Wrong Link</h1>
        </div>);
      }}/>
    </Switch>
    </div>
  );
}

export default App;
