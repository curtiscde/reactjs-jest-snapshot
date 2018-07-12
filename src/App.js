import React, { Component } from 'react';
import './App.css';
import SampleText from './SampleText';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">App Title</h1>
        </header>
        <p className="App-intro">
          App Introduction
        </p>
        <SampleText lines='1' />
      </div>
    );
  }
}

export default App;
