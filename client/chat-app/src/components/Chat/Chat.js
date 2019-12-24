import React, { useState, useEffect } from "react";

import MessageInput from '../MessageInput/MessageInput'
import Messages from '../Messages/Messages'


import './Chat.css';
// Just creating the object is enough to get connected.
const URL = 'ws://localhost:8080'
const client = new WebSocket(URL)
  // Setting binaryType to accept received binary as either 'blob' or 'arraybuffer'
client.binaryType = "blob";

 // creating universally unique identifier.
const uuid = require('uuid/v4');


const Chat = () => {
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);


  useEffect(() => {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    client.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data);
      const stateToChange = {};
      if (dataFromServer.type === "userevent") {
        stateToChange.currentUsers = Object.values(dataFromServer.data.users);
        console.log(dataFromServer.data.users)
      }

       // this is histroyr the message on my case
       
       stateToChange.userActivity = dataFromServer.data.userActivity
            console.log(dataFromServer.data.userActivity)
       // it display both the user list and the message
       this.setState({
         ...stateToChange
       });
       console.log(stateToChange)
      }

    return () => {
     
    }
  }, [messages])

 

  return (
    <div className="outerContainer">
    <div className="container">
        <Messages messages={messages} username={username} />
        <MessageInput message={message} setMessage={setMessage} sendMessage={sendMessage} />
    </div>
  
  </div>
  );
}
export default Chat;