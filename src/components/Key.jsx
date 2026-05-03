function Key({ value, handleInput, status }) {
  return (
    <button
      className={`key ${status || ""}`}
      onClick={() => handleInput(value)}
    >
      {value}
    </button>
  );
}

export default Key;