import Row from './Row';

function Board({ currentGuess }) {
  return (
    <div className="board">
      <Row guess={currentGuess} />

      {Array(5).fill().map((_, index) => (
        <Row key={index} guess="" />
      ))}
    </div>
  );
}

export default Board;