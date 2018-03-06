import React from 'react'
import { inputTask, addTask } from '../actions/tasks'

export default function ReactReduxTodoApp({ store }) {
  const { task, tasks } = store.getState()
  return (
    <div>
      <h2>ReactReduxTodoApp(separated)</h2>
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
