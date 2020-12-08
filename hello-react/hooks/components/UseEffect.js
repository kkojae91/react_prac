import React, { useState, useEffect, useRef } from "react";

function UseEffect() {
  const [input, setInput] = useState("");
  const isMount = useRef(false);

  const onChange = (event) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    if (isMount.current) {
      console.log("input state가 변했습니다.");
    } else {
      console.log("컴포넌트가 마운트 되었습니다.");
      isMount.current = true;
    }
    // return () => {
    // console.log("컴포넌트가 언마운트 되었습니다.");
    // };
  }, [input]);3ㅋ

  return (
    <div>
      <h1>UseEffect</h1>
      <input onChange={onChange} type="text" value={input} placeholder="useeffect 연구하기." />
    </div>
  );
}

export default UseEffect;
