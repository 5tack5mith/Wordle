import Tile from './Tile';

function Row({ guess }) {
  return (
    <div className="row">
      {Array(5).fill(null).map((_, index) => (
        <Tile 
            key={index}
            letter={guess[index] || ""}
        />
      ))}
    </div>
  );
}

export default Row;