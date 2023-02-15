import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';


//component to display on hover in the header
export default function HelpOverlay() {
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          Rules of the game:<br/>
          1. Use the alphabet keys to guess the correct letter<br/>
          2. If your guess is incorrect, the person begins to be drawn<br/>
          3. 6 incorrect guesses and it is game over!<br/>
          4. If you guess correctly you win the game!
        </Tooltip>
      );

      return (
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <Button variant="light">Help</Button>
        </OverlayTrigger>
      );  
      
}