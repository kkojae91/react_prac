import React, { useCallback, useState } from "react";

function Count() {
  const [num, setNum] = useState(0);

  // const onIncrease = () => {
  //   setNum(num + 1);
  // };

  // useCallback(() => {},[]) 기본 형식.
  // 함수 최적화 할때 사용.. 뭔가 느려질때.. 리펙토링 단계에서 사용하면 된다.
  // [num] <<-- num값이 변경될 때마다, 함수를 다시 호출 해준다.
  const onIncrease = useCallback(() => {
    setNum(num + 1);
  }, [num]);

  const onDecrease = () => {
    // setNum(num - 1);
    setNum((prevState) => prevState - 1);
  };

  return (
    <div>
      <h1>Counter</h1>
      <br />
      <h3>{num}</h3>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
}

export default Count;
