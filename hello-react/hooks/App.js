import { Count, Info, Input, UseEffect } from "./components";
import React, { useState } from "react";

function App() {
  const [isActive, setIsActive] = useState(false);
  const onToggle = () => {
    setIsActive(!isActive);
  };
  // const [visible, setVisible] = useState(false);
  // const onVisible = () => {
  //   setVisible(!visible);
  // };

  return (
    <div>
      {isActive ? <UseEffect /> : <></>}
      <button onClick={onToggle}>toggle</button>
      {/* <Input /> */}
      {/* <Count /> */}
      {/* <button onClick={onVisible}>{visible ? "숨기기" : "보이기"}</button> */}
      {/* {visible && <Info />} */}
    </div>
  );
}

export default App;
