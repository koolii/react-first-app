import React, { Component } from 'react'

class TodoInput extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      inputValue: '',
    }
  }

  handleClick(e) {
    e.preventDefault()
    const input = this.state.inputValue
    this.props.addTodo(input)

    // [question]ここでinputタグの中身を空にしたいんだけど思ったようにならない
    // 単純に動いていないっぽい
    this.setState({
      inputVaue: '',
    })
  }

  handleChange(e) {
    // ただ単純にinputタグのvalueにstateを当てはめて、イベントをバインドさせても
    // ここの関数でstateのinputValueを更新させないといつまでもinputValueに値が入らないので注意
    this.setState({
      inputValue: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <input placeholder="input new todo" value={this.state.inputValue} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Registeration</button>
      </div>
    )
  }
}

export default TodoInput