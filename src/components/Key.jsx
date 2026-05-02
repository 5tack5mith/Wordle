function Key({ value, handleInput }) {
  return (
    <button
      className="key"
      onClick={() => handleInput(value)}
    >
      {value}
    </button>
  );
}

export default Key;