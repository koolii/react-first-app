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

// reducer
function taskReducer(state = initialState, action) {
  console.log('coming reducer taskReducer')
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

function handleChange() {
  console.log('coming subscribe event')
  console.log(store.getState())
}

const store = createStore(taskReducer)

// 忘れてしまっていたが、このsubscribeはreact-reduxというライブラリが
// ラップしているから意識せず使用していることになる
const unsubscribe = store.subscribe(handleChange)

store.dispatch(addTask('store learning'))

// 4.2章からスタート
// ReactDOM.render(<App />, document.getElementById('root'));
