import React from 'react'

const style = {
  backgroundColor: 'green'
}

function TodoItem(props) {
  console.log(props)
  console.log(JSON.stringify(props))
  return (
    <li style={style} show-id={props.id} >
      {props.title}
    </li>
  )
}

export default TodoItem
