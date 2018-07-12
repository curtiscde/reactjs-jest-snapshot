import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './Child';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">App Title</h1>
        </header>
        <p className="App-intro">
          App Introduction
        </p>
        <Child/>
      </div>
    );
  }
}

export default App;
