// redux-thunkを最低限の機能だけど抽出して中身を理解する(7章)

const thunk = (store) => (next) => (action) => {
  // thunkを使うことにより、actionはオブジェクトだけでなく関数も用いることができるようになる
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState)
  }
  return next(action)
}

const request = () => {
  // 只のダミー
  const store = { dispatch: () => {}}
  // 関数をdispatchさせている例
  // この特徴は任意のタイミングで(onClick,onChange etc...)dispatch()を走らせることができること
  // => store.dispatch()の引数の形を拡張することが可能となる
  store.dispatch((dispatch, getState) => {
    dispatch({ type: 'DO_SOMETHING' })
  })
}