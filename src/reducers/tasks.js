const initialState = {
  task: '',
  tasks: ['kurya'],
}

export default function taskReducer(state = initialState, action) {
  // console.log(`Reducer(task) state: ${JSON.stringify(state)}, action: ${JSON.stringify(action)}`)
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
