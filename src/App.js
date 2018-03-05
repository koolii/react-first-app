import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactApp from './components/reactApp'
import reduxFlow from './redux-flow'


export default class App extends Component {
  constructor() {
    super()
    reduxFlow()
  }
  render() {
    return (
      <div>
        <ReactApp />
      </div>
    )
  }
}