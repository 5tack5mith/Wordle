import Header from './components/Header';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import './App.css';
import {useState,useEffect} from'react';
import checkGuess from './utils/checkGuess';
import validWords from './data/validWords';
import targetWords from './data/targetWords';

function App (){
  const [currentGuess,setCurrentGuess] = useState("");
  const [guesses,setGuesses] = useState([]);
  const [currentRow,setCurrentRow] = useState(0);
  const [keyboardStatus,setKeyboardStatus]= useState({});
  const statusPriority = {
    absent: 1,
    present: 2,
    correct: 3
  };
  const [gameOver, setGameOver] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [targetWord, setTargetWord] = useState(
    targetWords[Math.floor(Math.random() * targetWords.length)]
  );

  function handleKeyDown(event){
    handleInput(event.key);
  } 
  function handleInput(key) {
    if (gameOver) return;
    if (/^[a-zA-Z]$/.test(key) && currentGuess.length < 5) {
      setErrorMessage("");
      setCurrentGuess(prev => prev + key.toUpperCase());
    }

    if (key === "Backspace" || key === "⌫") {
      setErrorMessage("");
      setCurrentGuess(prev => prev.slice(0, -1));
    }

    if ((key === "Enter" || key === "ENTER") && currentGuess.length === 5) {
      if (!validWords.includes(currentGuess)) {
        setErrorMessage("Not a valid word!");
        return;
      }

      setErrorMessage("");

      const result = checkGuess(currentGuess, targetWord);

      if (currentGuess === targetWord) {
        setHasWon(true);
        setGameOver(true);
      }
      else if(currentRow === 5){
        setGameOver(true);
      }

      setGuesses(prev => [
        ...prev,
        {
          word: currentGuess,
          result: result
        }
      ]);

      setCurrentRow(prev => prev + 1);
      setCurrentGuess("");
      setKeyboardStatus((prevStatus) => {
        const updatedStatus = { ...prevStatus };

        for (let i = 0; i < currentGuess.length; i++) {
          const letter = currentGuess[i];
          const newStatus = result[i];

          if (!updatedStatus[letter] || statusPriority[newStatus] > statusPriority[updatedStatus[letter]]){
            updatedStatus[letter] = newStatus;
          }
        }
        return updatedStatus;
      });
    }
  }
  useEffect(()=>{
    window.addEventListener("keydown",handleKeyDown);
    return ()=>{
      window.removeEventListener("keydown",handleKeyDown);
    };
  },[currentGuess]);

  function restartGame() {
    setCurrentGuess("");
    setGuesses([]);
    setCurrentRow(0);
    setKeyboardStatus({});
    setGameOver(false);
    setHasWon(false);
    setErrorMessage("");
    setTargetWord(
      targetWords[Math.floor(Math.random() * targetWords.length)]
    );
  }

  return(
    <div>
      <Header />
      {gameOver && (
        <div className="game-message">
          {hasWon
            ? "Congratulations! You guessed the word!"
            : `Game Over! The word was ${targetWord}`}
            <button 
              className="restart-button" 
              onClick={restartGame}
            >
                Play Again
            </button>
        </div>
      )}

      {errorMessage && (
        <div className="error-message">{errorMessage}</div>
      )}

      <Board 
        currentGuess ={currentGuess}
        guesses={guesses}
        currentRow={currentRow}  
      />
      <Keyboard
        handleInput={handleInput}
        keyboardStatus={keyboardStatus}
      />
    </div>
  );
}

export default App;