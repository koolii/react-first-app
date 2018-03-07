import { connect } from 'react-redux'
import TodoApp from '../components/TodoApp'
import { inputTask, addTask } from '../actions/tasks'

// Storeにあるtask,tasksというStateをTodoAppのpropsとして渡す
// combineReducers()を利用すると夫々のstateが指定したkey毎に分かれて作成されるため、
// このmapStateToProps()では引数にその指定したkey名を指定することでStore全体から必要なstateだけを取得できる
// => ../store/index.jsにてkey名を設定している
function mapStateToProps({ tasks }) {
  return {
    task: tasks.task,
    tasks: tasks.tasks,
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
