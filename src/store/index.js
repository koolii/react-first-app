import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { createLogger } from 'redux-logger'
import tasksReducer from '../reducers/tasks'

// INPUT_TASKは除外
const loggerSetting = {
  predicate: (getState, action) => action.type !== 'INPUT_TASK',
}
const logger = createLogger(loggerSetting)

const middleware1 = store => next => action => {
  // middleware1
  // => middleware2が表示される
  console.log(next)
  return next(action)
}
const middleware2 = store => next => action => {
  // middleware2
  // => middleware3が表示される
  console.log(next)
  return next(action)
}
const middleware3 = store => next => action => {
  // middleware3
  // => routerMiddleware()の返り値が表示される
  // => 最終的には、reduxのdispatch自身が呼び出されるので、
  // 通常はnext()の実行結果がdispatch()の返り値になるのでnext()の結果をそのままreturn
  // すると無難な構成にできると思われる
  console.log(next)
  return next(action)
}
const originalLogger = store => next => action => {
  console.log("NOW:")
  console.log(store.getState())
  console.log("ACTION:")
  console.log(action)
  const result = next(action)
  console.log("NEW:")
  console.log(store.getState())
  return result
}

// ここのStoreを作成する処理の実装をミスしやすいので注意
export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      tasks: tasksReducer,
      route: routerReducer,
    }),
    applyMiddleware(
      logger,
      middleware1,
      middleware2,
      middleware3,
      originalLogger,
      routerMiddleware(history)
    )
  )
}
