import Header from './components/Header';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import './App.css';
import {useState,useEffect} from'react';

function App (){
  const [currentGuess,setCurrentGuess] = useState("");
  function handleKeyDown(event) {
    if (/^[a-zA-Z]$/.test(event.key) && currentGuess.length < 5) {
      setCurrentGuess(currentGuess + event.key.toUpperCase());
    }

    if (event.key === "Backspace") {
      setCurrentGuess(currentGuess.slice(0, -1));
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
      <Board currentGuess ={currentGuess}/>
      <Keyboard />
    </div>
  );
}

export default App;