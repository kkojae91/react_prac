const rootElement = document.querySelector("#root");

// hook들이 반복될 경우 customHook을 자체적으로 만들어 반복되는 코드를 줄여줄 수 있다.
// value 값이 인자로 들어오지 않을 경우 default값은 "" 빈문자열!
function useLocalStorage(itemName, value = "") {
  const [state, setState] = React.useState(() => {
    // localStorage.get(itemName)이 null일 경우 value를 적용!
    return localStorage.getItem(itemName) || value;
  });

  React.useEffect(() => {
    localStorage.setItem(itemName, state);
  }, [state]);

  return [state, setState];
}

const App = () => {
  const [keyword, setKeyword] = useLocalStorage("keyword");
  const [result, setResult] = useLocalStorage("result");
  const [typing, setTyping] = useLocalStorage("typing", false);

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
      <input onChange={handleChange} value={keyword} />
      <button onClick={handleClick}>search</button>
      <p>{typing ? `Looking for ${keyword}...` : result}</p>
    </>
  );
};

ReactDOM.render(<App />, rootElement);
