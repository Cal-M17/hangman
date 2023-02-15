import React from 'react';
import HelpOverlay from './Help';

const Header = ({playAgain}) => {
  return (
    <div className='row justify-content-md-center'>
      <div className='col'>
        <h1>
          Hangman
        </h1>
        <small>
          Find the secret word!<br />
          <p className='text-muted'>Hint: it's bootcamp related!</p>
        </small>
      </div>
      <div className='col mt-4'>
        {/* button to show help on hover */}
        <HelpOverlay />

        {/* restart button */}
        <button type='button' className='btn btn-light ms-2' onClick={playAgain}>Restart</button>
      </div>


    </div>
  )
}

export default Header
