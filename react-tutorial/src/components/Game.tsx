import React, {useState} from 'react';

type valueType = String | null

function Square() {
    const [value, setValue] = useState<valueType>(null)

    function handleClick() {
        console.log("clicked!");
        setValue("X");
    }

    return <button onClick={handleClick}> {value} </button>;
}

function Game() {
  return (
    <div className="App">
        <div className='board-row'>
            <Square />
            <Square />
            <Square />
        </div>
        <div className='board-row'>
            <Square />
            <Square />
            <Square />
        </div>
        <div className='board-row'>
            <Square />
            <Square />
            <Square />
        </div>
    </div>
  );
}

export default Game;
