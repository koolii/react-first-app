import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactApp from './react-components/reactApp'
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
        <span>thunkとはIT業界では「必要になった時に処理をする」意味らしい</span>
      </div>
    )
  }
}