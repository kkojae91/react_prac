// jsx 안에 js를 사용할 경우는 {} 중괄호 안에 사용하면 된다!
const rootElement = document.querySelector("#root");
const Text = ({ text }) => {
  // text가 대문자로 시작한다면 h1 tag로 return 소문자일 경우 h3 tag로 return;
  if (text[0] === text[0].toUpperCase()) {
    return <h1>{text}</h1>;
  } else {
    return <h3>{text}</h3>;
  }
};

// 숫자 예제 삼항연산자 사용
function Num({ number, selected }) {
  return selected ? <h1>{number}</h1> : <h3>{number}</h3>;
}

const element = (
  <>
    <Text text="Text"></Text>
    <Text text="text"></Text>
    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
      <Num number={number} key={number} selected={number === 3} />
    ))}
  </>
);

ReactDOM.render(element, rootElement);
