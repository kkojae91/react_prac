const rootElement = document.querySelector("#root");

const App = () => {
  console.log("render");
  // localStorage에서 값을 꺼내올 때 딜레이가 생길 수 있다.
  // const [keyword, setKeyword] = React.useState(localStorage.getItem("keyword"));
  // useState에 arrow function으로 return 값을 초기값으로 설정할 수 있고,
  // 이렇게 될 경우 값을 불러오는데 시간이 걸리더라도 항상 적용하게 만들 수 있다.
  const [keyword, setKeyword] = React.useState(() => {
    console.log("initialize");
    return localStorage.getItem("keyword");
  });
  const [result, setResult] = React.useState("");
  const [typing, setTyping] = React.useState(false);

  // React.useEffect(()=> {}, [대상])
  // useEffect는 값이 변화할 때 마다 실행시켜야할 경우 사용
  // 어떤 값이 변화하는지 확인하는걸 2번째 인자에 배열 형태로 넣어주면 React에서 2번째 인자에 넣어준 값이 변화할 때 마다 useEffect를 실행해준다.
  // 불필요한 호출을 줄여줄 수 있어 효과적이다.
  React.useEffect(() => {
    console.log("effect");
    localStorage.setItem("keyword", keyword);
  }, [keyword]);

  function handleChange(event) {
    // localStorage.setItem("keyword", event.target.value);
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
