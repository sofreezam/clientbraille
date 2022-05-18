import React from 'react';

import './Input.css';
var br = require('braille');
const Input = ({ setMessage, sendMessage, message,muteMsg }) => (
  <form className="form">
    <textarea
      className="input"
      type="text"
      placeholder="Type a message..."
      value={(message)}
      onChange={({ target: { value } }) => setMessage(value)}
    />
    <button className="sendButton" onClick={e => sendMessage(e)}>Text Send</button>
    
  </form>
)

export default Input;