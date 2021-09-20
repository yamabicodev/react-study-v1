import React from "react";

// propsを受け取るように修正
const ColorfulMessage = (props) => {
  // 分割代入が利用できる。
  const { color, children, message } = props;
  const cotentBlueStyle = {
    // color: props.color,
    color,
    fontSize: "28px"
  };
  // propsはJSのなのでpropsを使う場合は{}で囲んで書く！
  // HTML的にcomponentタグで囲んで値を受け取った場合はprops.childrenを使う。
  // <ColorfullMessage color="blue">How are you ?</ColorfullMessage>
  // 変数として受け取る場合は、props.変数名を使う。
  return (
    <>
      <p style={cotentBlueStyle}>{props.children}</p>
      <p style={cotentBlueStyle}>{props.message}</p>
      <p style={cotentBlueStyle}>{children}</p>
      <p style={cotentBlueStyle}>{message}</p>
    </>
  );
};

export default ColorfulMessage;
