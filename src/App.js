import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/hello';
import BasicReactFragment from './components/react-fragment'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello, World!!</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Hello />
        <Hello name="西郷隆盛" />
        <Hello name="勝海舟" />
        <BasicReactFragment />
      </div>
    );
  }
}

export default App;
