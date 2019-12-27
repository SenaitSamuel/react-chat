import React, { useState, useEffect } from "react";

import Login from '../Login/Login'
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
  const [id, setId] = useState(uuid());
  const [editedMessage, setEditedMessage] = useState(false);
  console.log(username)

  useEffect(() => {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    
  }, [])
  useEffect(() =>{
    client.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data)
      setMessages([...messages, dataFromServer ]);
      console.log(messages)
    };

  
  }, [messages])

//handle login
 const handleLogin =(e)=>{
  e.preventDefault();
  const username = e.target.username.value;
    if (username) {
      client.send(JSON.stringify({
        ...username,
        type: "userevent"
      }))  
      };
     
      // Send message to the server
          
}

 
  // get time and  daya
const getTime = () =>{
  const time = new Date(Date.now())
  return `${time.getHours()}:${("0"+time.getMinutes()).slice(-2)}`
}
  // send message to the sever
  const sendMessage = (event) => {
    event.preventDefault();
      if(message) {
        client.send(JSON.stringify(message))
        setMessage("")
      }
    }
  

  return (
    <div className="outerContainer">
      {!username ?(
        <Login  setUsername ={setUsername}  handleLogin={handleLogin }/>
      ):
      (
        <div className="container">
        <Messages messages={messages} username={username} />
        <MessageInput message={message} setMessage={setMessage} sendMessage={sendMessage} />
    </div>
      )
      }
  </div>
  );
}
export default Chat;