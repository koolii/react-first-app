import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import taskReducer from './reducers/tasks'
import TodoAppContainer from './containers/TodoApp'

// react-reduxというnpmモジュールを使ってTodoAppを実装する

const store = createStore(taskReducer)

ReactDOM.render(
  <Provider store={store}>
    <TodoAppContainer />
  </Provider>,
  document.getElementById('react_redux_m_root')
)
