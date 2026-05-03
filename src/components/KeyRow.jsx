import Key from './Key';

function KeyRow({ letters, handleInput, keyboardStatus }) {
  return (
    <div className="key-row">
      {letters.map((letter, index) => (
        <Key
          key={index}
          value={letter}
          handleInput={handleInput}
          status={keyboardStatus[letter]}
        />
      ))}
    </div>
  );
}

export default KeyRow;