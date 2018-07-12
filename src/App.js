import React, { Component } from 'react';
import './App.css';
import List from './List';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">App Title</h1>
        </header>
        <p className="App-intro">
          App Introduction
        </p>
        <List lines='1' />
      </div>
    );
  }
}