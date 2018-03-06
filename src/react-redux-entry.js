import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import taskReducer from './reducers/tasks'
import ReactReduxTodoApp from './components/TodoApp'

// react-reduxモジュール無しで、マニュアルでReactとReduxをあわせている

function renderApp(store) {
  ReactDOM.render(
    <ReactReduxTodoApp store={store} />,
    document.getElementById('react_redux_separate_root')
  )
}

const store = createStore(taskReducer)

// Storeの状態が変更される度に描画を行なう
store.subscribe(() => renderApp(store))
renderApp(store)
