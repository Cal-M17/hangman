import React from 'react'

//takes the selected word and displays as lines. if input letter is contained in selected word, the letter will dispaly in appropriate place
function Word({ selectedWord, correctLetters }) {
    return (
        <div className='word'>
            {selectedWord.split('').map((letter, i) => {
                return (
                    <span className='letter' key={i}>
                        {correctLetters.includes(letter) ? letter : ''}
                    </span>
                )
            })}
        </div>
    )
}

export default Word
