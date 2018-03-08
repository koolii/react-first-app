import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
// logger自体を使ってReduxMiddlewareに使うことも出来るが、createLoggerで独自設定をしたものを適用することもできる
// import logger from 'redux-logger'
import { createLogger } from 'redux-logger'
import tasksReducer from '../reducers/tasks'
import logger from '../middleware/logger'

// redux-logger
// const logger = createLogger({
//   // タスクの入力は一文字を入力するだけでログがでてウルサイのでスルー
//   predicate: (getState, action) => !['HIGH_FREQUENCY_ACTION', 'INPUT_TASK'].includes(action.type)
// })

export default function createStore(history) {
  // reduxモジュールのcreateStore()は第二引数に初期stateの状態を渡すことが出来る（この時の第三引数がapplyMiddleware()）
  // createStore()が内部で引数の数で処理を区別してくれてる
  // applyMiddleware()はenhancerと呼ばれてサードパーティでも色々と拡張機能がある
  // それらをcombineReducers()みたいにreduxモジュールのcompose関数を使って１つにまとめる
  return reduxCreateStore(
    combineReducers({
      // tasksReducerをtasksと言うkeyに割り当てる
      tasks: tasksReducer,
      // ルータ用のReducer(react-router-redux)
      router: routerReducer,
    }),
    // applyMiddleware()関数は可変長引数を受け付けて、ReduxMiddlewareを読み込ませることが出来る
    applyMiddleware(
      // ルータ用のMiddleware(react-router-redux)
      // Action経由でルーティングの制御が可能になる
      // https://github.com/evgenyrodionov/redux-logger#options
      // ↑のリンクで結構詳細な設定をすることができてカスタマイズできる
      routerMiddleware(history),
      logger,
    )
  )
}