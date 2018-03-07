import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory'
import createStore from './store'
import TodoAppContainer from './containers/TodoApp'

// react-reduxというnpmモジュールを使ってTodoAppを実装する

const history = createBrowserHistory()
const store = createStore(history)

// Routerを挟むことで下位の階層でRouteを使ったルーティングが可能になる
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <TodoAppContainer />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('react_redux_m_root')
)
