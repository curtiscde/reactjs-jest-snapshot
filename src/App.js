import React, { Component } from 'react';
import './App.css';
import List from './List';

export default class App extends Component {
  render() {

    const header = this.props.title
      ? <header className="App-header">
          <h1 className="App-title">{this.props.title}</h1>
        </header>
      : null;


    const items = ['foo', 'bar', 'baz'];

    return (
      <div className="App">
        {header}
        <p className="App-intro">
          App Introduction
        </p>
        <List items={items} />
      </div>
    );
  }
}