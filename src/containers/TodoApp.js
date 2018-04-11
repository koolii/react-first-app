import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import TodoApp from '../components/TodoApp'
import { inputTask, addTask } from '../actions/tasks'

// combineReducers()を実行する前はtasksと言うキーオブジェクトにマッピングされていない
// function mapStateToProps({ task, tasks }) {
function mapStateToProps({ tasks }) {
  // console.log(`tasks-reducer: ${JSON.stringify(tasks)}`)
  return {
    task: tasks.task,
    tasks: tasks.tasks,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTask(task) {
      dispatch(addTask(task))
    },
    inputTask(task) {
      dispatch(inputTask(task))
    },
    redirectToError() {
      dispatch(push('/error'))
    },
  }
}

// もっと自由度が高いデータの受け渡しを行いたい場合は、connectAdvanced()を使用すること出来る
// 今は特に調べない(No.1783/4373)
export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)
