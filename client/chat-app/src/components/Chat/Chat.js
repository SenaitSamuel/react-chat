import React, { useState, useEffect } from "react";

import MessageInput from '../MessageInput/MessageInput'
import MessageList from '../MessageList/MessageList'
import UserList from '../UserList/UserList'



const Chat = () => {
  
  return (
    <div className="outerContainer">
        chat app
        <MessageInput/>
        <MessageList/>
        <UserList/>

    </div>
  );
}

export default Chat;