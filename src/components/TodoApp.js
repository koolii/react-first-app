import React from 'react'
import { inputTask, addTask } from '../actions/tasks'

export default function TodoApp({ store }) {
  const { task, tasks } = store.getState()
  console.log(`TodoApp Component ${JSON.stringify(store.getState())}`)
  return (
    <div>
      <input type="text" onChange={(e) => store.dispatch(inputTask(e.target.value))} />
      <input type="button" value="add" onClick={() => store.dispatch(addTask(task))} />
      <ul>
        {
          tasks.map((task, i) => {
            return (
              <li key={i}>{task}</li>
            )
          })
        }
      </ul>
    </div>
  )
}
