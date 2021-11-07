const rootElement = document.querySelector("#root");

// 전역 객체 생성
const state = { keyword: "", typing: false, result: "" };

const App = () => {
  // change event;
  function handleChange(event) {
    setState({ typing: true, keyword: event.target.value });
  }

  // click event;
  function handleClick() {
    setState({ typing: false, result: `We find result of ${state.keyword}` });
  }

  return (
    <>
      <input onChange={handleChange} />
      <button onClick={handleClick}>search</button>
      <p>{state.typing ? `Looking for ${state.keyword}...` : state.result}</p>
    </>
  );
};

// Object.assign(기존객체, 새로운객체)
// => 기존객체와 새로운객체를 비교하여 달라진 부분을 기존객체에 새롭게 업데이트 해준다.
function setState(newState) {
  Object.assign(state, newState);
  render();
}

// 전역 변수는 immutable하기 때문에 새롭게 계속 ReactDOM.render()를 해줘야하기 때문에 함수로 만들고
// setState가 호출될 때마다 render()를 호출해준다.
function render() {
  ReactDOM.render(<App />, rootElement);
}

// 초기 값이 없기 때문에 초기에 render()를 호출해준다.
render();
