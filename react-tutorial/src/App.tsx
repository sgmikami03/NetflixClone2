import React from 'react';

import logo from './logo.svg';
import './App.css';


function Square(value: string) {
  return (
    <button className="square">
      {value}
    </button>
  );
}

function App() {
  return (
    <div className="App">
      <button className="square">X</button>
    </div>
  );
}

export default App;
