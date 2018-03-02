import React from 'react'
import PropTypes from 'prop-types'

// propsにオブジェクトから値を1つずつ(name,birthDay)に当てはめることもできるが
// もっと簡単にspread演算子を使ってオブジェクトを直接渡すことも出来る(App.jsでProfileを使用している箇所を参照)
const Profile = (props) => {
  return (
    <ul>
      <li>Name: {props.name}</li>
      <li>Birthday: {props.birthDay}</li>
    </ul>
  )
}

// ClassComponentには当然適用可能なpropTypesによる型チェックだが、
// FunctionComponentも型チェックは可能で、propTypesと言うオブジェクトを追加することで検査可能
// 型がまちがっていると、View側のコンソールにエラーが表示される
Profile.propTypes = {
  name: PropTypes.string,
  birthDay: PropTypes.string,
}

export default Profile