import React, {useEffect} from 'react'
import { checkWin } from '../helpers/Helpers';

//display pop up at end of game

const PopUp = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain}) => {
    let finalMessage = '';
    let finalMessageReveal = '';
    let playable = true;

    //if you win 
    if(checkWin(correctLetters, wrongLetters, selectedWord) === 'win') {
        finalMessage = 'You Won!';
        playable = false;
    //if you lose
    } else if (checkWin(correctLetters, wrongLetters, selectedWord) === 'lose') {
        finalMessage = 'You lose!';
        finalMessageReveal = `The word was ... ${selectedWord}.`;
        playable = false;
    }

    useEffect(() => setPlayable(playable));

    //if the final message is not blank (win/lose) change display to show the pop up
    return (
        <div className="popup-container" style={finalMessage !== '' ? {display: 'flex'} : {}}>
            <div className="popup">
                <h2>{finalMessage}</h2>
                <h3>{finalMessageReveal}</h3>
                <button onClick={playAgain}>Play Again</button>
            </div>
        </div>
    )
}

export default PopUp
