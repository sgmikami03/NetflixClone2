import React, {useState} from 'react';

type ValueType = "X" | "O" | null;

type SquareProps = {
    value: ValueType;
    onSquareClick: () => void;
}

function Square(Props: SquareProps) {
    return <button onClick={Props.onSquareClick}> {Props.value} </button>;
}

function calcWinner(squares: Array<ValueType>) {
    const lines: Array<Array<number>> = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 5, 6],
    ]

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

type BordProps = {
    xIsNext: boolean,
    squares: ValueType[],
    onPlay: (nextSquares: ValueType[]) => void;
}

function Board(Props: BordProps) {
    // const [xIsNext, setIsNext] = useState(true);
    // const [squares, setSquares] = useState(Array(9).fill(null));

    let squares: ValueType[] = Props.squares;
    let xIsNext = Props.xIsNext;

    function handleClick(i: number) {
        if(squares[i]) {
            return;
        }

        let nextSquares: (ValueType)[] = squares.slice();
        if(xIsNext) {
            nextSquares[i] = "X"
        }else {
            nextSquares[i] = "O"
        }
        // setSquares(nextSquares);
        // setIsNext(!xIsNext);
        Props.onPlay(nextSquares);
    }

    const winner = calcWinner(squares);
    let status;
    if (winner) {
        status = "Winner: " + winner
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O")
    }

    return (
        <>
            <p className='status'>{status}</p>
            <div className='board-row'>
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className='board-row'>
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className='board-row'>
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </>
    )
}

function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState<number>(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];


    function handlePlay(nextSquares: ValueType[]) {
        const nextHistry = [...history.splice(0, currentMove + 1), nextSquares];
        setHistory(nextHistry);
        console.log(nextHistry);
        
        setCurrentMove(nextHistry.length - 1);
        console.log(currentMove);
    }

    function jumpTo(nextMove: number) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let description: string;
        if(move > 0) {
            description = 'Go to move #' + move;
        }else {
            description = "Go to game start";
        }
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        )
    })
    
    return (
        <div className="game">
            <div className='game-bord'>
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className='game-info'>
                <ol>{moves}</ol>
            </div>
        </div>
    );
}

export default Game;
