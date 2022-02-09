import { TOP_KEYBOARD_LETTERS, MIDDLE_KEYBOARD_LETTERS, BOTTOM_KEYBOARD_LETTERS } from './constants';
import Key from './Key';

function Keyboard() {
  return (
    <div className="keyboard-wrapper">
      {
        TOP_KEYBOARD_LETTERS.map((letter) => <Key key={letter} letter={letter} />)
      }
      <div className="space" />
      {
        MIDDLE_KEYBOARD_LETTERS.map((letter) => <Key key={letter} letter={letter} />)
      }
      <div className="space" />
      {
        BOTTOM_KEYBOARD_LETTERS.map((letter) => <Key key={letter} letter={letter} />)
      }
    </div>
  );
}

export default Keyboard;
