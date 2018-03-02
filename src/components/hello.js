import React from 'react'
import PropTypes from 'prop-types'

// もちろんこれでも動作はするんだが、Reactの機能を使うのなら下の方が良い
// HelloFunctionalComponentのdefaultPropsで実現出来る
const HelloManual = (props) => {
  return <div>こんにちは、{props.name || '坂本龍馬'}さん</div>
}

const Hello = (props) => {
  return <div>こんにちは、{props.name}さん</div>
}
Hello.propTypes = {
  name: PropTypes.string.isRequired,
}
Hello.defaultProps = {
  name: '坂本龍馬',
}

export default Hello