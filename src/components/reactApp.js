import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Hello from './hello';
import BasicReactFragment from './react-fragment'
import CComponents from './children'
// なぜかこれが通らない
// import { Children, Greeting } from './children'
import Profile from './profile'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

const { Children, Greeting } = CComponents
const profileKoolii = {
  name: 'koolii',
  birthDay: '09/09/1992',
}

export default class ReactApp extends Component {
  constructor() {
    super()
    this.state = {
      tasks: [
        { title: 'first todo', id: 0 },
        { title: 'second todo', id: 1 },
      ],
      uniqueId: 1,
    }
    // this(=App)のcontextを別の場所(TodoInputコンポーネント)で使用したいためbind()で束縛させる
    // property initializer syntaxというのを使うと、関数を定義し、且つbind()された状態にすることが出来るらしい(要babel)
    this.addTodo = this.addTodo.bind(this)
    this.resetTodo = this.resetTodo.bind(this)
  }

  resetTodo() {
    this.setState({
      tasks: [],
    })
  }

  addTodo(title) {
    // Appのステートを管理するためのイベントだからTodoInputコンポーネントではなく、
    // App.jsで記述し、イベント自体はTodoInputコンポーネントに渡す
    const { tasks, uniqueId } = this.state;
    tasks.push({
      title,
      id: uniqueId,
    })
    this.setState({
      tasks,
      uniqueId: uniqueId + 1,
    })
  }

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

        <Children>
          koolii
        </Children>

        <Greeting>
          <Hello />
          <Hello name="西郷隆盛" />
          <Hello name="勝海舟" />
        </Greeting>

        <Profile {...profileKoolii} />

        <div>
          <h1>Todo App</h1>
          <button onClick={this.resetTodo}>Reset</button>
          <TodoInput addTodo={this.addTodo} />
          <TodoList tasks={this.state.tasks} />
        </div>
      </div>
    );
  }
}
