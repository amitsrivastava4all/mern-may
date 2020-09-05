import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './components/Header';
import { Switch, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { News } from './components/News';
import { Login } from './components/Login';
function App() {
  return (
    <div className="App">
     <h1>SPA Demo</h1>
     <Header/>
     <hr/>
    <Switch>
      <Route exact path="/" component={Home}  />
      <Route path="/about" component={About}  />
      <Route path="/news/:type/:subtype" component={News}  />
      <Route path="/login" component={Login}  />
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
