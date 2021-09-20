import React from "react";

// reactの場合、HTMLで扱うイベント・スタイルの名称がキャメルケースになる。
// on-click -> onClick
// font-size -> fontSize
// JSXで囲んでいるタグの中で波括弧({})で囲われている部分はjsとして扱われる。

// styleの場合
// {{ color: "red" }} 外側がJS 内側がオブジェクトの波括弧を表す。
// 値は文字列は必ずダブルクォーてションで囲むこと
const App = () => {
  const onClickButton = () => {
    alert(1);
  };
  const cotentStyle = {
    color: "blue",
    fontSize: "28px"
  };

  return (
    <>
      <h1 style={{ color: "red" }}>Hello!</h1>
      <p style={cotentStyle}>TESTEST</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
