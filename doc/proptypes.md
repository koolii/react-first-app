## PropTypesによる型チェックについて

結構typescriptやっていれば分かるような内容
ここではこの型が良いと言う定義なだけであって実際に違う方を送っても良い？(必須項目ならisRequired??)

### プリミティブ(+α)
```javascript
PropTypes.string
PropTypes.number
PropTypes.bool
PropTypes.array
PropTypes.object
PropTypes.func
PropTypes.symbol
PropTypes.any
```

### 組み合わて新しいPropTypeを作成
```javascript
// 数値の配列
PropTypes.arrayOf(PropTypes.number)
// 数値のオブジェクト(オブジェクトはプロパティそれぞれにも適用可)
PropTypes.objectOf(PropTypes.number)
PropTypes.shape({
  name: PropTypes.string,
  age: PropTypes.number,
})
```

### React特有のPropTypes
```javascript
// Reactエレメント
PropTypes.element
// コンポーネントになりえる（string, number, element, array）ならOK
PropTypes.node
// Helloコンポーネントのインスタンスであること
PropTypes.instanceOf(Hello)
```

### さらに詳細な制限
```javascript
// 特定の文字列に制限
PropTypes.oneOf(['月', '火', '水', '木', '金', '土', '日']),
// 特定のPropTypesに制限(どっちかというと複数型許容)
PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.instanceOf(Hello),
])
```

##　isRequired
```javascript
// 必ず文字列
PropTypes.string.isRequired
// 必ずなんでも良いから値を積めること
PropTypes.any.isRequired
```

## defaultProps(読んで字のごとく値が渡されなかった場合のデフォルト値)

```javascript
const Hello = (props) => {
  return <div>Hello, {props.name}</div>
}

Hello.propTypes = {
  name: PropTypes.string,
}
Hello.defaultProps = {
  name: '坂本龍馬',
}
```