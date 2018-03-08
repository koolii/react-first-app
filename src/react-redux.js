import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory'
import createStore from './store'
import TodoAppContainer from './containers/TodoApp'
import Error from './components/Error'

// react-reduxというnpmモジュールを使ってTodoAppを実装する

const history = createBrowserHistory()
const store = createStore(history)

// Routerを挟むことで下位の階層でRouteを使ったルーティングが可能になる
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={TodoAppContainer}  />
        <Route exact path="/error" component={Error}  />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('react_redux_m_root')
)
