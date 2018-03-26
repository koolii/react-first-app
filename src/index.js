import { createStore } from 'redux'

const initialState = {
  tasks: [],
}

// action creator
const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: {
    task,
  },
})
const resetTask = () => ({
  type: 'RESET_TASK',
  payload: {},
})

// reducer
function addReducer(state = initialState, action) {
  console.log('coming reducer addReducer')
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
function resetReducer(state = initialState, action) {
  console.log('coming reducer resetReducer')
  switch (action.type) {
    case 'RESET_TASK':
      return {
        ...state,
        tasks: [],
      }
    default:
    return state
  }
}

// function handleChange() {
//   console.log('coming subscribe event')
//   console.log(store.getState())
// }

const store = createStore(addReducer)

// 忘れてしまっていたが、このsubscribeはreact-reduxというライブラリが
// ラップしているから意識せず使用していることになる
// const unsubscribe = store.subscribe(handleChange)
store.dispatch(addTask('store learning'))
console.log(JSON.stringify(store.getState()))


store.replaceReducer(resetReducer)
store.dispatch(resetTask())
console.log(JSON.stringify(store.getState()))

