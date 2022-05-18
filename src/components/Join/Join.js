import React, { useState } from 'react';
import { Link } from "react-router-dom";//link to chat

import './Join.css';

//join room and fx
export default function SignIn() {
  //var-> name, setter -> setName , string -> useState('')
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Ebraille Teaching Platform</h1>
        <div>
          {/*input--> if user put something in fx, event should be occur,get data from event.target.value */}
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
         {/*link to chat */}
         {/*if have room and name go to chat room,if not, do nothing(null) */}
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Sign In</button>
        </Link>
      </div>
    </div>
  );
}
