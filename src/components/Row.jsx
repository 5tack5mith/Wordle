import Tile from './Tile';

function Row() {
  return (
    <div className="row">
      {Array(5).fill(null).map((_, index) => (
        <Tile key={index} />
      ))}
    </div>
  );
}

export default Row;