import Header from './components/Header';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import './App.css';
import {useState} from 'react';

function App (){
  const [currentGuess,setCurrentGuess] = useState("");
  console.log(currentGuess);
  return(
    <div>
      <Header />
      <Board currentGuess ={currentGuess}/>
      <button onClick={() => setCurrentGuess("APPLE")}>
        Test Guess
      </button>
      <Keyboard />
    </div>
  );
}

export default App;