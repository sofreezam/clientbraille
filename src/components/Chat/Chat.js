import React, { useState, useEffect } from "react";
import queryString from "query-string"; //module to choose data from web
import io from "socket.io-client";

import TextContainer from "../TextContainer/TextContainer";
import Messages from "../Messages/Messages";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import BrailleInput from "../brailleInput/BrailleInput";

import "./Chat.css";

const ENDPOINT = "https://teachbraille.herokuapp.com/";
var br = require("braille");
let socket;

//chat room and function
const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [act, setAct] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState(""); //
  const [messages, setMessages] = useState([]); //store all message

  //location is react module,fx is to get data
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT); //localhost

    setRoom(room); //setter room and name to the data we get
    setName(name);
    //emit and var can be anything 'join',on join we pass the name and room
    //error get from index.js(server)
    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });

    /*old version
    return statement to unmounting,disconnect fx
      return () => {
        socket.emit('disconnect') --> from index.js(server)
        socket.off();
      } */
  }, [ENDPOINT, location.search]); //if the value change,it will get effect--> function useEffect

  //message fx
  useEffect(() => {
    //specific message
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []); //old version [messages]

  //emit to send message Braille(index.js(server))
  const sendMessageBr = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", br.toBraille(message), () => setMessage(""));
    }
  };
  //emit to send message(index.js(server))
  const sendMessage = (event) => {
    event.preventDefault(); //avoid refresh webpage
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };
   //emit to send message mute(index.js(server))
   const muteMsg = (event) => {
    event.preventDefault(); //avoid refresh webpage
    
  };

  return (
    <div>
      <div className="outerContainer">
        <div className="container">
          {/*dari sini data room pindah ke infobar*/}
          <InfoBar room={room} />
          {/*dari sini data messsages pindah ke messages.js*/}
          <Messages messages={messages} name={name} />
        </div>
      </div>
      <div className="textDisplay">
        {/*data dari Input berpindah ke Chat.js */}
        <BrailleInput
          message={message}
          setMessage={setMessage}
          sendMessageBr={sendMessageBr}
        />
        <Input 
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      <div  className="userDisplay">
        <TextContainer users={users} />
      </div>
    </div>
  );
};

export default Chat;
