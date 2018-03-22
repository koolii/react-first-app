import React, { Component } from 'react'

export default class TodoInput extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      inputValue: '',
    }
  }

  handleClick() {
    this.props.addTodo(this.state.inputValue)
    this.setState({
      inputValue: ''
    })
  }

  handleChange(e) {
    this.setState({ inputValue: e.target.value })
  }

  render() {
    return (
      <div>
        <input placeholder="please type something" value={this.state.inputValue} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Register</button>
      </div>
    )
  }
}