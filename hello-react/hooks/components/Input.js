import React, { useState } from "react";

function Input() {
  const [inputs, setInputs] = useState({
    id: "",
    pw: "",
  });

  const { id, pw } = inputs;

  const onChange = (event) => {
    setInputs({
      // 기존의 값들을 가지고 오고, 만약 값이 변한다면, event.target.value를 통해 값을 변경해주는 함수
      ...inputs,
      [event.target.name]: event.target.value,
    });
    // console.log(event.target);
  };

  const onReset = () => {
    setInputs({
      id: "",
      pw: "",
    });
  };

  return (
    <div>
      <h1>Input Practice</h1>
      {id} // {pw}
      <br />
      <input value={id} onChange={onChange} name="id" type="text" placeholder="아이디를 입력하세요" />
      <input value={pw} onChange={onChange} name="pw" type="password" placeholder="비밀번호를 입력하세요" />
      <br />
      <button onClick={onReset}>reset</button>
    </div>
  );
}

export default Input;
