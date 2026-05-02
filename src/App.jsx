import Header from './components/Header';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import './App.css';
import {useState,useEffect} from'react';
import checkGuess from './utils/checkGuess';

function App (){
  const [currentGuess,setCurrentGuess] = useState("");
  const [guesses,setGuesses] = useState([]);
  const [currentRow,setCurrentRow] = useState(0);
  const targetWord="APPLE";

  function handleKeyDown(event){
    handleInput(event.key);
  } 
  function handleInput(key) {
  if (/^[a-zA-Z]$/.test(key) && currentGuess.length < 5) {
    setCurrentGuess(prev => prev + key.toUpperCase());
  }

  if (key === "Backspace" || key === "⌫") {
    setCurrentGuess(prev => prev.slice(0, -1));
  }

  if ((key === "Enter" || key === "ENTER") && currentGuess.length === 5) {
    const result = checkGuess(currentGuess, targetWord);

    setGuesses([
      ...guesses,
      {
        word: currentGuess,
        result: result
      }
    ]);

    setCurrentRow(prev => prev + 1);
    setCurrentGuess("");
  }
}
  useEffect(()=>{
    window.addEventListener("keydown",handleKeyDown);
    return ()=>{
      window.removeEventListener("keydown",handleKeyDown);
    };
  },[currentGuess]);

  return(
    <div>
      <Header />
      <Board 
        currentGuess ={currentGuess}
        guesses={guesses}
        currentRow={currentRow}  
      />
      <Keyboard handleInput={handleInput}/>
    </div>
  );
}

export default App;