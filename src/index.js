import React from 'react'
import ReactDOM from 'react-dom'
import tasksReducer from './reducers/tasks'
import TodoApp from './components/TodoApp'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
const store = createStore(tasksReducer)

function renderApp(store) {
  console.log('renderApp')
  ReactDOM.render(
    <TodoApp store={store} />,
    document.getElementById('root')
  )
}

const rendering = () => renderApp(store)

// storeの中身を変化した時に再度レンダリングを行なうように実装する
// 今回はreact-reduxを使ってない
store.subscribe(rendering)

// 初期ロード時
rendering()

// ReactDOM.render(
//   <Provider store={store}>
//     <TodoApp />
//   </Provider>,
//   document.getElementById('root')
// )
