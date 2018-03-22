import React, { Component } from 'react'

export default class TodoInput extends Component {
  render() {
    return (
      <div>
        <input placeholder="please type something" />
        <button>Register</button>
      </div>
    )
  }
}