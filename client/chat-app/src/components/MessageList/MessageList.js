import React from 'react'


import './MessageList.css';

const MessageList = ({ message, username }) => {
  let isSentByCurrentUser = false;

  const trimmedName = username;

  if(trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        <div className="messageContainer justifyEnd">
          <p className="sentText pr-10">{trimmedName}</p>
          <div className="messageBox backgroundBlue">
          <p className="messageText colorWhite">{message}</p>
          </div>
        </div>
        )
        : (
          <div className="messageContainer justifyStart">
            <div className="messageBox backgroundLight">
            <p className="messageText colorWhite">{message}</p> 
            </div>
          
          </div>
        )
  );
}
  
  export default MessageList;