import React from 'react'

// containersでStoreから必要な項目を作成し、このコンポーネントに渡されてくる
// そのためコンポーネントでは、ただ、渡されたPropsを利用するだけで良い
export default function ReactReduxTodoApp({ task, tasks, inputTask, addTask, name = 'react-redux' }) {
  return (
    <div>
      <h2>ReactReduxTodoApp(uses `{name}` module)</h2>
      <input type="text" onChange={(e) => inputTask(e.target.value)} />
      <input type="button" value="add" onClick={() => { addTask(task) }} />
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
