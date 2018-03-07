import { connect } from 'react-redux'
import TodoApp from '../components/TodoApp'
import { inputTask, addTask } from '../actions/tasks'

// Storeにあるtask,tasksというStateをTodoAppのpropsとして渡す
function mapStateToProps({ task, tasks }) {
  return {
    task,
    tasks,
  }
}

// actionを発行し、dispatchさせる
function mapDispatchToProps(dispatch) {
  return {
    addTask(task) {
      dispatch(addTask(task))
    },
    inputTask(task) {
      dispatch(inputTask(task))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)
