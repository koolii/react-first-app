import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import taskReducer from './reducers/tasks'
import TodoAppContainer from './containers/TodoApp'

// react-reduxというnpmモジュールを使ってTodoAppを実装する

const store = createStore(taskReducer)

// Routerを挟むことで下位の階層でRouteを使ったルーティングが可能になる
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <TodoAppContainer />
    </Router>
  </Provider>,
  document.getElementById('react_redux_m_root')
)
