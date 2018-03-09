import React from 'react'

// webpack, css-loader, style-loaderを使うと一般的には出来ないCSSのimportも可能になる
// => create-react-appは標準で設定がされている
// import './Button.css'

// ※非推奨: 直接スタイルを定義する
// またはclassName属性にCSSで定義したスタイルを割り当てる
const style = {
  color: 'blue',
  fontSize: '20px'
}

// containersでStoreから必要な項目を作成し、このコンポーネントに渡されてくる
// そのためコンポーネントでは、ただ、渡されたPropsを利用するだけで良い
export default function ReactReduxTodoApp({ task, tasks, inputTask, addTask, redirectToError }) {
  return (
    <div>
      <h2>ReactReduxTodoApp(uses `react-redux` module)</h2>
      <input type="text" style={style} onChange={(e) => inputTask(e.target.value)} />
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
      <button onClick={() => redirectToError()}>go to error page</button>
    </div>
  )
}
