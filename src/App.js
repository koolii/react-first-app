import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/hello';
import BasicReactFragment from './components/react-fragment'
import CComponents from './components/children'
// なぜかこれが通らない
// import { Children, Greeting } from './components/children'
import Profile from './components/profile'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

const { Children, Greeting } = CComponents
const profileKoolii = {
  name: 'koolii',
  birthDay: '09/09/1992',
}

class App extends Component {
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

export default App;
