import React, { useEffect, useState } from "react";

function Info() {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  // 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 hook.
  // 특정값이 변경될 때만 실행하고 싶다면 두번째 인자에 [name]을 넣어주면 name의 값이 변경 될 때만 실행된다.
  // 두번째 인자에 [] 빈배열을 두면 처음 component가 렌더링 될때만, 실행 되고 그 뒤로는 실행 되지 않는다.
  // useEffect(() => {},[])
  useEffect(() => {
    console.log("effect");
    console.log(name);
    return () => {
      console.log("cleanup");
      console.log(name);
    };
  });

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeNickname = (event) => {
    setNickname(event.target.value);
  };

  return (
    <div>
      <div>
        <input type="text" value={name} onChange={onChangeName} />
        <input type="text" value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <strong>이름: </strong>
        {name}
      </div>
      <div>
        <strong>닉네임: </strong>
        {nickname}
      </div>
    </div>
  );
}

export default Info;
