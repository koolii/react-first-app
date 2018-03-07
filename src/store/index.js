import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import tasksReducer from '../reducers/tasks'

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      // tasksReducerをtasksと言うkeyに割り当てる
      tasks: tasksReducer,
      // ルータ用のReducer(react-router-redux)
      router: routerReducer,
    }),
    applyMiddleware(
      // ルータ用のMiddleware(react-router-redux)
      // Action経由でルーティングの制御が可能になる
      routerMiddleware(history)
    )
  )
}