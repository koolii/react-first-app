import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
  render() {
    const list = this.props.tasks.map((todo) => (<TodoItem {...todo} key={todo.id} delete={this.props.delete} />))
    return (
      <ul>
        {list}
      </ul>
    )
  }
}