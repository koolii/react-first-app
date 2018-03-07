import React from 'react'
import { inputTask, addTask } from '../actions/tasks'

// containersでStoreから必要な項目を作成し、このコンポーネントに渡されてくる
// そのためコンポーネントでは、ただ、渡されたPropsを利用するだけで良い
export default function ReactReduxTodoApp({ store }) {
  const { task, tasks } = store.getState()
  return (
    <div>
      <h2>ReactReduxTodoApp(uses only uses react, redux module)</h2>
        <input type="text" onChange={(e) => store.dispatch(inputTask(e.target.value))} />
        <input type="button" value="add" onClick={() => { store.dispatch(addTask(task)) }} />
      <ul>
        {
          tasks.map((item, i) => {
            return (
              <li key={i}>{item}</li>
            )
          })
        }
      </ul>
    </div>
  )
}
