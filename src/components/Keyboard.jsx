import KeyRow from './KeyRow';

function Keyboard({ handleInput, keyboardStatus }) {
  const row1 = ["Q","W","E","R","T","Y","U","I","O","P"];
  const row2 = ["A","S","D","F","G","H","J","K","L"];
  const row3 = ["ENTER","Z","X","C","V","B","N","M","⌫"];

  return (
    <div className="keyboard">
      <KeyRow
        letters={row1}
        handleInput={handleInput}
        keyboardStatus={keyboardStatus}
      />

      <KeyRow
        letters={row2}
        handleInput={handleInput}
        keyboardStatus={keyboardStatus}
      />

      <KeyRow
        letters={row3}
        handleInput={handleInput}
        keyboardStatus={keyboardStatus}
      />
    </div>
  );
}

export default Keyboard;