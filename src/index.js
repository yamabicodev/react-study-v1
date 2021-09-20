import React from "react";
//htmlにdomを反映するcomponent
import ReactDom from "react-dom";
import App from "./App";
// 一行の場合
// const App = () => {
//   return <h1>Hello!</h1>;
// };
// 複数行の場合
// JXSは１つのタグで囲んで返却する必要がある。
// 不要だがdiv要素が必要になってしまう。
// const App = () => {
//   return (
//     <div>
//       <h1>Hello!</h1>
//       <p>TESTEST</p>
//     </div>
//   );
// };
// React.Fragmentをつけると回避できる。
// const App = () => {
//   return (
//     <React.Fragment>
//       <h1>Hello!</h1>
//       <p>TESTEST</p>
//     </React.Fragment>
//   );
// };
// さらに何もないかっこ<></>で囲むことで回避できる。
// const App = () => {
//   return (
//     <>
//       <h1>Hello!</h1>
//       <p>TESTEST</p>
//     </>
//   );
// };

// App.jsを利用する。
// 画面に反映する
ReactDom.render(<App />, document.getElementById("root"));
