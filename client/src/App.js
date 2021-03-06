import React, { Component } from 'react';
import MessageWindow from './components/MessageWindow.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Chat App</h1>
        </header>
        <MessageWindow api="http://10.0.0.177:3000/messages" />
      </div>
    );
  }
}

export default App;
