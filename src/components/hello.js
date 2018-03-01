import React from 'react'

const Hello = (props) => {
  return <div>こんにちは、{props.name || '坂本龍馬'}さん</div>
}

export default Hello