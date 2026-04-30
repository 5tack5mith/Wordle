import KeyRow from"./KeyRow";
function Keyboard() {
  const row1 = ["Q","W","E","R","T","Y","U","I","O","P"];
  const row2 = ["A","S","D","F","G","H","J","K","L"];
  const row3 = ["ENTER","Z","X","C","V","B","N","M","⌫"];
  return (
    <div className="keyboard">
        <KeyRow letters={row1}/>
        <KeyRow letters={row2}/>
        <KeyRow letters={row3}/>
    </div>
  );
}

export default Keyboard;