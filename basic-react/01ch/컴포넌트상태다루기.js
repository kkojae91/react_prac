const rootElement = document.querySelector("#root");

const App = () => {
  // const [상태관리 값, 상태변화 함수] = React.useState(초기값);
  // 초기값에는 object, array, boolean, string, number 등 모두 넣을 수 있다.
  const [keyword, setKeyword] = React.useState("");
  const [result, setResult] = React.useState("");
  const [typing, setTyping] = React.useState(false);

  function handleChange(event) {
    setKeyword(event.target.value);
    setTyping(true);
  }

  function handleClick() {
    setTyping(false);
    setResult(`We find results of ${keyword}`);
  }

  return (
    <>
      <input onChange={handleChange} />
      <button onClick={handleClick}>search</button>
      <p>{typing ? `Looking for ${keyword}...` : result}</p>
    </>
  );
};

ReactDOM.render(<App />, rootElement);
