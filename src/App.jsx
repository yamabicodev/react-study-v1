import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

// reactの場合、HTMLで扱うイベント・スタイルの名称がキャメルケースになる。
// on-click -> onClick
// font-size -> fontSize
// JSXで囲んでいるタグの中で波括弧({})で囲われている部分はjsとして扱われる。

// styleの場合
// {{ color: "red" }} 外側がJS 内側がオブジェクトの波括弧を表す。
// 値は文字列は必ずダブルクォーてションで囲むこと
const App = () => {
  console.log("App func Start");
  // useSateから配列の分割代入で取得する。
  // 第1引数にstateとして使用する変数名・第2引数にstateを変更する関数名
  // useState(0)で初期値が設定できる。
  const [num, setNum] = useState(0);
  const [faceShow, setFaceShow] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchFaceShow = () => {
    setFaceShow(!faceShow);
  };
  // この処理はNG.過剰にレンダリングを繰り返してしまう。
  // if (num % 3 === 0) {
  //   setFaceShow(true)
  // } else {
  //   setFaceShow(false)
  // }
  useEffect(() => {
    if (num % 3 === 0) {
      faceShow || setFaceShow(true);
    } else {
      faceShow && setFaceShow(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  // componentタグをHTMLライクに開始タグと閉じタグで囲み値を連携することもできる。
  // その場合は受け取り側がprops.childlenで値を取得する。
  return (
    <>
      <h1 style={{ color: "red" }}>Hello!</h1>
      <ColorfulMessage color="blue">How are you ?</ColorfulMessage>
      <ColorfulMessage color="pink" message="I'm Fine!" />
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchFaceShow}>OF/OFF</button>
      <p>{num}</p>
      {faceShow && <p>(^^)</p>}
    </>
  );
};

export default App;
