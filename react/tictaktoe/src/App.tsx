import React from "react";
import { useState } from "react";

const emprtyString = "\u200B";

type SquareComponents = {
  valueUse: any;
  onSquareClick: React.MouseEventHandler<HTMLButtonElement>;
};

function Square({ valueUse, onSquareClick }: SquareComponents) {
  return (
    <button className="square" onClick={onSquareClick}>
      {valueUse}
    </button>
  );
}

export default function Board() {
  // checks if next turn is X
  const [xIsNext, setXIsNext] = useState(true);
  // set the arry with invisvle charecters
  const [squares, setSquares] = useState<string[]>(
    Array(10).fill(emprtyString)
  );

  function handleClick(i: number) {
    // makes a coppy of the arry
    const nextSquares = squares.slice();
    // check if the vlaue if not the invisible charecter
    if (nextSquares[i] !== emprtyString || calculateWinnder(squares)) {
      return;
    }
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  return (
    <>
      <div className="board-row">
        <Square valueUse={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square valueUse={squares[2]} onSquareClick={() => handleClick(2)} />
        <Square valueUse={squares[3]} onSquareClick={() => handleClick(3)} />
      </div>
      <div className="board-row">
        <Square valueUse={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square valueUse={squares[5]} onSquareClick={() => handleClick(5)} />
        <Square valueUse={squares[6]} onSquareClick={() => handleClick(6)} />
      </div>
      <div className="board-row">
        <Square valueUse={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square valueUse={squares[8]} onSquareClick={() => handleClick(8)} />
        <Square valueUse={squares[9]} onSquareClick={() => handleClick(9)} />
      </div>
    </>
  );
}

function calculateWinnder(squares: string[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      squares[a] === emprtyString ||
      squares[b] === emprtyString ||
      squares[c] === emprtyString
    ) {
      continue;
    }
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c] &&
      squares[a]
    ) {
      return squares[a];
    }
  }
  return null;
}
