import { useState } from 'react';
import Square from './Square';
import '../css/Playing.css';
import { WinningLogic } from './Helper';

const Playing = () => {
  const [squares, setSquare] = useState(Array(9).fill(null));
  const [isXNext, setXNext] = useState(true);
  let status = 'Next Player is ' + (isXNext ? 'x' : '0');

  const winningInfo = WinningLogic(squares);
  const winner = winningInfo.winner;

  const winnerHighlight = winningInfo.line;
  let stats;

  if (winner) {
    status = 'Hurray the winner is' + winner;
  }
  else if (winningInfo.isDraw) {
    status = 'It is a Draw';
  }
  else {
    status = 'Next player is ' + (isXNext ? 'x' : '0');
  }

  function renderSquare(i) {
    return (
      <Square onClick={() => {
        const nextSquare = squares.slice();
        nextSquare[i] = isXNext ? 'x' : '0';
        setXNext(!isXNext);
        setSquare(nextSquare);
      }}

        value={squares[i]}
        highlightWinner={winnerHighlight && winnerHighlight.includes(i)}
      />
    )
  }

  return (
    <div>
      <div className='status'>{status}</div>
      <div className='playing'>
        <div className='board-row'>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className='board-row'>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className='board-row'>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    </div>
  )


};
export default Playing;