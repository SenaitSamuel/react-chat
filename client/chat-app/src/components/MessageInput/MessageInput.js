import React from 'react'

import './MessageInput.css';
const MessageInput = () => {
  
    return (
        <form className="form">
        <input
          className="input"
          type="text"
          placeholder="Type a message..."
        
         
        />
        <button className="sendButton" >Send</button>
      </form>
    );
  }
  
  export default MessageInput;