// server.js
const WebSocket = require('ws');
 
 // init webSocket
const wss = new WebSocket.Server({ port: 8080 });

// Generates unique ID for every new connection
const getUniqueID = () => {
  const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  return s4() + s4() + '-' + s4();
};

// I'm maintaining all active connections in this object
const clients = [];
// I'm maintaining all active users in this object
const users = {};
// The current editor content is maintained here.
let editorContent = null;
// User activity history.
let userActivity = [];



const sendMessage = (json) => {
  // We are sending the current data to all connected clients
  Object.keys(clients).map((client) => {
    clients[client].send(json);
  });
}

const typesDef = {
  USER_EVENT: "userevent",
  CONTENT_CHANGE: "contentchange",
  DELETE_CHANGE: "deleteMessage",
  EDITED_CHANGE: "editedMessage",
  IMAGE_TYPE: "image",
  GIPHY_TYPE:"giphy"
}

wss.on('connection', function(connection) {
  var userID = getUniqueID();
  clients.push(connection)
  
  connection.on('message', function(message) {
   
    const dataFromClient = JSON.parse(message);
    
      sendMessage(JSON.stringify(dataFromClient));
   
  });
  // user disconnected
  connection.on('close', function(connection) {
   console.log("disconnected")
  });
});