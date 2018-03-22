import React, { Component } from 'react';
import TodoInput from './TodoInput'
import TodoList from './TodoList'

export default class App extends Component {
  constructor(props) {
    super(props)
    // this.state への直接上書きはconstructor()でしか出来ない
    this.state = {
      tasks: [
        { title: 'Todo first', id: 0 },
        { title: 'Todo second', id: 1 },
      ],
      uniqueId: 2,
    }
  }

  render() {
    return (
      <div>
        <h1>Simple Todo Application</h1>
        <TodoInput />
        <TodoList tasks={this.state.tasks} />
      </div>
    )
  }
}