# react-study-v1

## React Point

#### component

- 画面要素の 1 単位。大(1 画面)から小(1 テキストボックス等)まで様々

#### Props

component に渡される引数的なもの

```js
//渡す方
<ComponentTag someVerbName="someValue">

// 受け取る方
const funcName = (props) => {
  console.log(props.someVerbName)
}
```

#### State

各 component が持つ状態 Sate が変更されると再レンダリングされる。
useState には someVerb の初期値を括弧の中に設定できる。

```js
// 0を初期値とする。
const [someVerb, setSomeSateVerbUpdateFunc] = useSate(0);
```
