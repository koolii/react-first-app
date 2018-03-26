import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

const initialState = {
  task: '',
  tasks: ['kurya'],
}

const inputTask = (task) => ({
  type: 'INPUT_TASK',
  payload: { task },
})
const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: { task },
})

function taskReducer(state = initialState, action) {
  console.log(`Reducer(task) state: ${JSON.stringify(state)}, action: ${JSON.stringify(action)}`)
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

const store = createStore(taskReducer)

function renderApp(store) {
  console.log('renderApp')
  ReactDOM.render(
    <TodoApp store={store} />,
    document.getElementById('root')
  )
}

function TodoApp({ store }) {
  const { task, tasks } = store.getState()
  console.log(`TodoApp Component ${JSON.stringify(store.getState())}`)
  return (
    <div>
      <input type="text" onChange={(e) => store.dispatch(inputTask(e.target.value))} />
      <input type="button" value="add" onClick={() => store.dispatch(addTask(task))} />
      <ul>
        {
          tasks.map((task, i) => {
            return (
              <li key={i}>{task}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

const rendering = () => renderApp(store)

// storeの中身を変化した時に再度レンダリングを行なうように実装する
// 今回はreact-reduxを使ってない
store.subscribe(rendering)

// 初期ロード時
rendering()
