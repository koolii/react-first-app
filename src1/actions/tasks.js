import shortid from 'shortid'

const sleep1sec = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000)
  })
}

// ActionCreator
export const inputTask = (task) => ({
  type: 'INPUT_TASK',
  payload: {
    task,
  }
})

export const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: {
    task
  }
})

// ↓↓redux-thunkを使った非同期処理について↓↓

function addTodo(title) {
  return {
    // type: 'ADD_TODO',
    type: 'ADD_TASK',
    payload: {
      id: shortid.generate(),
      title,
    },
  }
}

export const asyncAddTodo = (title) => {
  // 関数をActionCreatorが返している
  return (dispatch, getState) => {
    setTimeout(() => {
      // 非同期だろうがなんだろうが、dispatchにActionさえ渡すことができれば
      // dispatch()内部は同期的に処理を行ってくれる
      dispatch(addTodo(title))
    }, 1000)
  }
}

export const asyncAddTodoPromise = (title) => {
  return (dispatch) => {
    sleep1sec()
      .then(() => {
        dispatch(addTodo(title))
      })
  }
}

export const asyncAddTodoAsyncAwait = (title) => {
  return async (dispatch) => {
    console.log(`dispatch: ${dispatch}, ${Object.keys(dispatch)}`)
    await sleep1sec()
    dispatch(addTodo(title))
  }
}
