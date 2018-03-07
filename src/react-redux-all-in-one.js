import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

// react-reduxモジュール無しで、マニュアルでReactとReduxをあわせている

// ActionCreator
const inputTask = (task) => ({
  type: 'INPUT_TASK',
  payload: {
    task,
  }
})
const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: {
    task
  }
})

const initialState = {
  task: '', // inputタグの入力を管理するためのstate要素
  tasks: [],
}

function taskReducer(state = initialState, action) {
  switch (action.type) {
    case 'INPUT_TASK':
      return {
        ...state,
        task: action.payload.task,
      }
    case 'ADD_TASK':
      return {
        ...state,
        tasks: state.tasks.concat([action.payload.task]),
      }
    default:
      return state
  }
}

function ReactReduxTodoApp({ store }) {
  const { task, tasks } = store.getState()
  return (
    <div>
      <h2>ReactReduxTodoApp(AllInOne)</h2>
      <input type="text" onChange={(e) => store.dispatch(inputTask(e.target.value))} />
      <input type="button" value="add" onClick={() => { store.dispatch(addTask(task)) }} />
      <ul>
        {
          tasks.map((item, i) => {
            return (
              <li key={i}>{item}</li>
            )
          })
        }
      </ul>
    </div>
  )
}
function renderApp(store) {
  ReactDOM.render(
    <ReactReduxTodoApp store={store} />,
    document.getElementById('react_redux_root')
  )
}

const store = createStore(taskReducer)

// Storeの状態が変更される度に描画を行なう
store.subscribe(() => renderApp(store))
renderApp(store)