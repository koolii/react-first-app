import React from 'react'

export default function TodoApp(props) {
  const { task, tasks, inputTask, addTask, redirectToError } = props
  // console.log(`TodoApp Component Props ${JSON.stringify(props)}`)

  return (
    <div>
      <input type="text" onChange={(e) => inputTask(e.target.value)} />
      <input type="button" value="add" onClick={() => addTask(task)} />
      <ul>
        {
          tasks.map((task, i) => {
            return (
              <li key={i}>{task}</li>
            )
          })
        }
      </ul>
      <button onClick={() => { redirectToError() }}>Go to Error Page</button>
    </div>
  )
}
