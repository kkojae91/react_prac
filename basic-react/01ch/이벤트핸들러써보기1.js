// js 이밴트 핸들러 사용하기
// const rootElement = document.querySelector("#root");
// const buttonElement = document.querySelector("#button");

// buttonElement.addEventListener("click", () => {
//   rootElement.innerHTML = new Date();
// });

// react 이밴트 핸들러 사용하기
// inline 형식으로 사용한다! 이벤트 네임은 카멜케이스로 사용 예) onclick -> onClick!
const rootElement = document.querySelector("#root");
const handleClick = () => alert("Pressed");
const handleMouseOut = () => alert("Bye~");

const element = (
  <button onClick={handleClick} onMouseOut={handleMouseOut}>
    Press
  </button>
);

ReactDOM.render(element, rootElement);
