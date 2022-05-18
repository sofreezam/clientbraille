import React from 'react';

import './BrailleInput.css';
var br = require('braille');
const BrailleInput = ({ setMessage, sendMessageBr, message }) => (
  <form className="formBr">
    <textarea
      className="input"
      type="text"
      placeholder="Braille Display"
      value={(br.toBraille(message))}
      onChange={({ target: { value } }) => setMessage(value)}
    />
    <button className="sendButtonBr" onClick={e => sendMessageBr(e)}>Braille Send</button>
  </form>
)

export default BrailleInput;