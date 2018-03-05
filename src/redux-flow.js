import { createStore } from 'redux'

// Storeの初期状態宣言
const initialState = {
  tasks: [],
}

// Reducerの定義
// Storeの状態を変化させる
// 今回はactionを受け取り、タスクをどんどん追加させている
// Actionの想定オブジェクトフォーマット =>
// {
//   type: 'ADD_TASK',
//   payload: {
//     task: 'Learning Reducer',
//   }
// }
function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: state.tasks.concat([action.payload.task])
      }
    default:
      return state
  }
}

// ActionCreator
// Actionは全てActionsCreatorを経由して作成される
const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: {
    task,
  }
})

const reduxFlow = () => {
  // Reducerにつき、１つのStoreを管理する
  // store内にはdispatch/getState/subscribe/replaceReducerの4つがある
  const store = createStore(tasksReducer)

  // subscribe: Storeの状態が更新された時に、動作するコールバック関数を定義することが出来る
  // ↓のunsubscribe()を実行することでsubscribeの内容が解除される
  const unsubscribe = store.subscribe(handleChange)
  function handleChange() {
    // getState: Storeの状態を参照する
    const current = store.getState()
    console.log(JSON.stringify(current))

    unsubscribe()
    console.log('unsubscribed.')
  }

  // dispatch: Actionを発行し、それをReducerに適用、Storeを更新する
  store.dispatch(addTask(`this is an action for calling store's dispatch method`))

  console.log('dispatch again (never calls dispatch method).')
}

export default reduxFlow
