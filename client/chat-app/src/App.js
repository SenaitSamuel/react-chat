import React from 'react';
import './styles/App.css';

import Chat from './components/Chat/Chat';
//import Login from './components/Login/Login';

//import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
   // <Router>
    //  <Route path="/" exact component={Login} />
    //  <Route path="/chat" component={Chat} />
    //</Router>
    <Chat/>
  );
}

export default App;