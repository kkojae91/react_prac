const rootElement = document.querySelector("#root");

const App = () => {
  console.log("APP render Start");
  const [show, setShow] = React.useState(() => {
    console.log("APP useState ");
    return false;
  });

  // useEffect는 render가 된다음 한번에 호출! 그 후는 인자 상태에 따라 추가 반응!
  // 두번째 인자가 없는 no dependency의 경우 모두 반응!
  React.useEffect(() => {
    console.log("APP useEffect no dependency");
  });
  // 두번째 인자에 [] empty dependency를 준 경우 처음 호출될 때만 반응!
  React.useEffect(() => {
    console.log("APP useEffect empty dependency");
  }, []);
  // 두번째 인자에 [show] 를 줄 경우 show가 변화할대마다 반응!
  React.useEffect(() => {
    console.log("APP useEffect [show]");
  }, [show]);

  function handleClick() {
    // useState의 set함수의 첫번째 인자는 이전의 값이 들어있다.
    // boolean을 전환시킬 경우 prev => !prev를 하면 조건문 없이 결과를 만들수 있다.
    setShow((prev) => !prev);
  }

  return (
    <>
      <button onClick={handleClick}>Search</button>
      {show ? (
        <>
          <input type="text" />
          <p></p>
        </>
      ) : null}
    </>
  );
};

ReactDOM.render(<App />, rootElement);
console.log("APP render End");
