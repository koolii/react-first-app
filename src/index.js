import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import { ConnectedRouter } from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory'

import TodoApp from './containers/TodoApp'
import createStore from './store'

// react-reduxはProviderとconnectが主な機能
// react-reduxを追加したことで、store.subscribe()が隠蔽される
const history = createBrowserHistory()
const store = createStore(history)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <TodoApp />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
