import Row from './Row';

function Board({ currentGuess, guesses, currentRow }) {
  return (
    <div className="board">
      {Array(6).fill().map((_, index) => {
        if (index < guesses.length) {
          return <Row key={index} guess={guesses[index]} />;
        }

        if (index === currentRow) {
          return <Row key={index} guess={currentGuess} />;
        }

        return <Row key={index} guess="" />;
      })}
    </div>
  );
}

export default Board;