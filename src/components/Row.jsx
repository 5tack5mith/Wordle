import Tile from './Tile';

function Row({ guess ="", result=[]}) {
  return (
    <div className="row">
      {Array(5).fill(null).map((_, index) => (
        <Tile 
            key={index}
            letter={guess[index] || ""}
            status={result[index]}
        />
      ))}
    </div>
  );
}

export default Row;