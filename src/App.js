import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import { showNotification as show } from './helpers/Helpers';
import Notification from './components/Notification';
import PopUp from './components/PopUp';
import './App.css';

//hardcoded the game words that will be seleceted randomly
const words = ['hyperion', 'programming', 'react', 'javascript', 'html', 'css'];
let selectedWord = words[Math.floor(Math.random() * words.length)];


function App() {

  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);


  useEffect(() => {
    const handleKey = e => {
      const {key, keyCode} = e;

        if (playable && keyCode >= 65 && keyCode <= 90) {
          const letter = key.toLowerCase();
          
          //if the input key is contained within the word add to correct letters. If the key has already been used show the notification component
          if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
              setCorrectLetters(currentLetters => [...currentLetters, letter]);
            } else {
              show(setShowNotification);
            }
          } else {
          //if the input key is not contained within the word add to wrong letters. If the key has already been used show the notification component
            if (!wrongLetters.includes(letter)) {
              setWrongLetters(wrongLetters => [...wrongLetters, letter]);
            } else {
              show(setShowNotification);
            }
          }
        }
      }

      window.addEventListener('keydown', handleKey);

      //ensures we don't end up with so many eventListeners that the app slows down
      return () => window.removeEventListener('keydown', handleKey);

  }, [correctLetters, wrongLetters, playable]);

  //function for play again button after winning/losing
  function playAgain() {
    setPlayable(true);

    //clear arrays
    setCorrectLetters([]);
    setWrongLetters([]);
    //get new word
    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }


  return (
    <>
      <Header playAgain={playAgain}/>
      <div className='game-container'>
        <Figure wrongLetters={wrongLetters}/>
        <WrongLetters wrongLetters={wrongLetters}/>
        <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
      </div>
      <PopUp correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain}/>
      <Notification showNotification={showNotification}/>
    </>
  );
}

export default App;
