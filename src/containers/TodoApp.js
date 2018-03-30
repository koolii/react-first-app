import { connect } from 'react-redux'
import TodoApp from '../components/TodoApp'
import { inputTask, addTask } from '../actions/tasks'

function mapStateToProps({ task, tasks }) {
  console.log(`task: ${task}`)
  console.log(`tasks: ${tasks}`)
  return {
    task,
    tasks,
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
  }
}

// もっと自由度が高いデータの受け渡しを行いたい場合は、connectAdvanced()を使用すること出来る
// 今は特に調べない(No.1783/4373)
export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)
