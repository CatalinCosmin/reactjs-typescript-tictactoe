import { useState } from "react";
import { calculateWinner } from "./game-logic";
import { Square } from "./square";


export const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xNext, setNext] = useState(true);

    let statusText = "Next player: "

    const winner = calculateWinner(squares);
    if (winner) {
        statusText = 'Winner: ' + winner;
    } else {
        statusText = 'Next player: ' + (xNext ? 'X' : 'O');
    }

    return (
        <div>
            <div className="status">{statusText}</div>
            {renderSquares(squares, setSquares, xNext, setNext)}
        </div>
    )
}

// original
// const renderSquares = (squares: string[], setSquares: (arg0: any) => void, xNext: boolean, setNext: (arg0: any) => void) => {
//     const rows = [];
//     for(let i = 1; i <= 3; ++i)
//     {
//         const columns = [];
//         for(let j = 1; j <= 3; ++j)
//         {
//             let val = (i - 1) * 3 + j;
//             columns.push(
//                 <Square val = {val} squares = {squares} setSquares = {setSquares} xNext = {xNext} setNext = {setNext}/>
//             )
//         }

//         rows.push(
//             <div className="board-row">
//                 {columns}
//             </div>
//         );
//     }
//     return rows;
// }

// LSD way
const renderSquares = (squares: string[], setSquares: (arg0: any) => void, xNext: boolean, setNext: (arg0: any) => void) => {
    return [...Array(3)].map((_, i) => (
        <div className="board-row">
        {
            [...Array(3)].map((_, j) => (
                <Square val = {(i-1)*3+j} squares = {squares} setSquares = {setSquares} xNext = {xNext} setNext = {setNext}/>
            ))
        }
        </div>
    ))
}
