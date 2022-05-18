import React from 'react';

import Chat from './components/Chat/Chat';  //import component
import Join from './components/Join/Join';

import { BrowserRouter as Router, Route } from "react-router-dom"; //router-dom version 5.3.0

const App = () => {
//kalau parantheses --> function
//kalau bracket terus direct ke return function


  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Chat} />
    </Router>
  );
}

export default App;
