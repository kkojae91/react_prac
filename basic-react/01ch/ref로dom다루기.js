const rootElement = document.querySelector("#root");

const App = () => {
  // JS처럼 input tag에 focus를 주려면 useEffect를 사용해 mount 된 다음에 document.querySelector()가 동작하게 만들어서 focus()를 준다.
  // React.useEffect(() => {
  //   document.querySelector("#input").focus();
  // }, []);

  // useRef를 사용해서 input tag에 focus 주기

  const inputRef = React.useRef();

  const divRef = React.useRef();

  // useEffect를 사용하는 이유 -> render가 된 다음에 실행시키기 위해서!
  React.useEffect(() => {
    // inputRef에 바로 focus()를 주는게 아니라 current라는 공간을 주고 그 위에 focus() 를 줘야 정상적으로 동작합니다.
    inputRef.current.focus();
    // divRef도 inputRef 와 동일하게 dom을 조작하기 위해서는 current라는 공간을 주고 그 위에 style.backgroundColor로 bgc를 변경할 수 있다.
    setTimeout(() => {
      divRef.current.style.backgroundColor = "pink";
    }, 1000);
  }, []);

  return (
    <>
      {/* <input id="input" /> */}
      <input ref={inputRef} />
      <div
        ref={divRef}
        style={{ width: 300, height: 100, backgroundColor: "brown" }}
      ></div>
    </>
  );
};

ReactDOM.render(<App />, rootElement);
