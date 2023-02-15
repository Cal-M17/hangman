import React from 'react'

//displays wrong letters that have been used
const WrongLetters = ({wrongLetters}) => {
    return (
        <div className="wrong-letters-container">
            <div>
                {wrongLetters.length > 0 && <p>That is Incorrect!</p>}
                {wrongLetters
                    .map((letter, i) => <span key={i}>{letter}</span>)
                    .reduce((prev, curr) => prev == null ? [curr] : [prev, ',', curr], null)}
            </div>
        </div>
    )
}

export default WrongLetters
