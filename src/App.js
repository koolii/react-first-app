import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactApp from './react-components/reactApp'
import reduxFlow from './redux-flow'
import _ from './react-redux-entry'


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