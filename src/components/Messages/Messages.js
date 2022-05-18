import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';//module to auto scroll to bottom

import Message from './Message/Message'; //import message component

import './Messages.css';

const Messages = ({ messages, name }) => (
  <ScrollToBottom className="messages">
    {/*looping message */}
    {/*dari sini data message pindah ke message.js*/}
    {messages.map((message, i) => <div key={i}><Message message={message} name={name}/></div>)} 
  </ScrollToBottom>
);

export default Messages;