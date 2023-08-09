import React, {useState} from 'react';

type SquareProps = {
    value: string;
  }

function Square(Props: SquareProps) {
    const [value, setValue] = useState(null)
    function handleClick() {
        console.log("clicked!");
    }

    return <button onClick={handleClick}> {Props.value} </button>;
}

function Game() {
  return (
    <div className="App">
        <div className='board-row'>
            <Square value="1"/>
            <Square value="2"/>
            <Square value="3"/>
        </div>
        <div className='board-row'>
            <Square value="4"/>
            <Square value="5"/>
            <Square value="6"/>
        </div>
        <div className='board-row'>
            <Square value="7"/>
            <Square value="8"/>
            <Square value="9"/>
        </div>
    </div>
  );
}

export default Game;
