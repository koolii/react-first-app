import React from 'react'
import Reboot from 'material-ui/Reboot'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import Input from 'material-ui/Input'
import List, { ListItem, ListItemText } from 'material-ui/List'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './TodoApp.css'

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
      <Reboot />
      <AppBar position="static">
        <Toolbar>
          <Typography type="title" color="inherit">
            Todo
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ padding: '16px' }}>
        <Input onChange={(e) => inputTask(e.target.value)} />
        <Button color="secondary" onClick={() => { addTask(task) }}>add</Button>
        <List>
          <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={300}>
          {
            tasks.map((item, i) => {
              return (
                <ListItem key={i}>
                  <ListItemText primary={`・${item}`} />
                </ListItem>
              )
            })
          }
          </ReactCSSTransitionGroup>
        </List>
        <button onClick={() => redirectToError()}>go to error page</button>
      </div>
    </div>
  )
}
