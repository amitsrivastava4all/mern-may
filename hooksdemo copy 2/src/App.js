import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Plus } from './components/plus';
import { Complex } from './components/complex';
import { A } from './sharing/A';

function App() {
  return (
    <div >
     <h1>Hooks</h1>
     <Plus/>
     <hr/>
     <Complex/>
     <br/>
     <hr/>
     <A/>
    </div>
  );
}

export default App;
