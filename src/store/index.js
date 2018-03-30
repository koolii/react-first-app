import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import tasksReducer from '../reducers/tasks'

// ここのStoreを作成する処理の実装をミスしやすいので注意
export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      tasks: tasksReducer,
      route: routerReducer,
    }),
    applyMiddleware(
      routerMiddleware(history)
    )
  )
}
