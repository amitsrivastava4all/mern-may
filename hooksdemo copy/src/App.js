import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Plus } from './components/plus';
import { Complex } from './components/complex';

function App() {
  return (
    <div >
     <h1>Hooks</h1>
     <Plus/>
     <hr/>
     <Complex/>
    </div>
  );
}

export default App;
