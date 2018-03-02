import React from 'react'

// 単純にchildrenの要素を出力している。文字列を期待している
const Children = (props) => {
  return (
    <div>こんにちは、children要素のReactエレメントの{props.children}さん</div>
  )
}

// Reactエレメントを渡してGreeting内部から呼出している
const Greeting = (props) => {
  return (
    <div>
      <div>(Greeting)Reactエレメントからの挨拶</div>
      {props.children}
    </div>
  )
}

export default { Children, Greeting }
