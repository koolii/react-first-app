import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ReactDOM from 'react-dom'
import tasksReducer from './reducers/tasks'
import TodoApp from './containers/TodoApp'

// react-reduxはProviderとconnectが主な機能
// react-reduxを追加したことで、store.subscribe()が隠蔽される

const store = createStore(tasksReducer)

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
)
