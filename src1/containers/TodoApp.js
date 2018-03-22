import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import TodoApp from '../components/TodoApp'
import { inputTask, addTask, asyncAddTodoAsyncAwait } from '../actions/tasks'

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
      // todo redux-thunkの処理が上手く動作しない。時間かかっているので一旦放置
      // asyncAddTodoAsyncAwait(task)
      dispatch(addTask(task))
    },
    inputTask(task) {
      dispatch(inputTask(task))
    },
    // /errorへリダイレクトさせる
    redirectToError() {
      dispatch(push('/error'))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)
