import Header from './components/Header';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import './App.css';
import {useState,useEffect} from'react';

function App (){
  const [currentGuess,setCurrentGuess] = useState("");
  const [guesses,setGuesses] = useState([]);
  const [currentRow,setCurrentRow] = useState(0);
  function handleKeyDown(event) {
    if (/^[a-zA-Z]$/.test(event.key) && currentGuess.length < 5) {
      setCurrentGuess(currentGuess + event.key.toUpperCase());
    }
    if (event.key === "Backspace") {
      setCurrentGuess(currentGuess.slice(0, -1));
    }
    if(event.key === "Enter" && currentGuess.length === 5){
      setGuesses([...guesses,currentGuess]);
      setCurrentRow(currentRow+1);
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
      <Keyboard />
    </div>
  );
}

export default App;