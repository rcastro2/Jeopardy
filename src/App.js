import React from 'react';
import './App.css';
import Board from './components/Board/Board'

function App(props) {
  return (
    <div className="App">
      <Board info={props.info}/>
    </div>
  );
}

export default App;
