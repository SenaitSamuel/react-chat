import React from 'react';

import './Messages.css';
import MessageList from '../MessageList/MessageList'

const Messages = ({ messages, username }) => (
  <div className="messages">
    {messages.map((message, i) => <div key={i}>
      <MessageList message={message} username={username}/></div>)}
  </div>
);

export default Messages