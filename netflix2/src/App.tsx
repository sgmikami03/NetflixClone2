//import React from 'react';
//import logo from './logo.svg';
import { Row } from "./components/Row";
import { requests } from "./requests";
import './App.css';

function App() {
  return (
    <div className="App">
      <Row
      title="NETFLIX ORIGUINALS"
      fetchUrl={requests.feachNetflixOriginals}
      isLargeRow
    />
    </div>
  );
}

export default App;
