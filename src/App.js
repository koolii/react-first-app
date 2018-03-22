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

    // stateがここにあるので、ここでイベントを宣言し、下位のコンポーネントにイベントを渡す
    this.addTodo = this.addTodo.bind(this)
    this.delete = this.delete.bind(this)
  }

  // 登録用のイベントだけ登録しておく
  addTodo(title) {
    const { tasks, uniqueId } = this.state
    tasks.push({ title, id: uniqueId })
    this.setState({ tasks, uniqueId: uniqueId + 1 })
  }

  delete(id) {
    const { tasks } = this.state
    this.setState({
      tasks: tasks.filter((todo) => (todo.id !== id))
    })
  }

  render() {
    return (
      <div>
        <h1>Simple Todo Application</h1>
        <TodoInput addTodo={this.addTodo} />
        <TodoList tasks={this.state.tasks} delete={this.delete} />
      </div>
    )
  }
}