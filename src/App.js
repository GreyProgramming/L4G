import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import ChatScreen from './ChatScreen';
import Chats from './Chats';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/chat/:person">
            <Header backButton='/chat' />
            <ChatScreen />
          </Route>
          <Route path="/chats">
            <Header backButton='/' />
            <Chats />
          </Route>
          <Route path="/profile">
            <Header backButton='/' />
            <h1>profile page</h1>
          </Route>
          <Route path="/">
            <Header />
            Advert cards component here
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
        
        {/* buttons */}




        {/* chat list */}
        {/* individual chat screen */}
      
      </Router>
    </div>
  );
}

export default App;
