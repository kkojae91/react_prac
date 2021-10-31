const rootElement = document.querySelector("#root");
// arrow function 으로 ({props, props}) => () ; props로 전달하기 때문에 아래에서
// Paint function의 인자를 {} 객체 데이터로 넘겨주고,
// <Paint title="Good" description="good" />
// => title의 값이 Paint 함수의 title 자리로,
// => description 값이 Paint 함수의 description 자리로,
// => children 값이 Paint함수의 children 자리로 할당 된다.

// function 과 jsx의 tag는 항상 대문자로 작성해야 한다.
// Custom Element
// Paint = ({}) => (); arrow function으로 Paint를 정의한 후
// jsx 문법을 <Paint />를 사용하는 것을 Custom element라고 한다.
const Paint = ({ title, description, children }) => (
  <>
    <h1 className="title">{title}</h1>
    <h3 className="description">{description}</h3>
    {children}
  </>
);

const Children = () => <h3>Children</h3>;

const element = (
  <>
    <Paint title="Good" description="good">
      <Children />
      <Children />
      <Children />
    </Paint>
    <Paint title="Bad" description="bad"></Paint>
    <Paint title="Hi" description="hello"></Paint>
  </>
);

ReactDOM.render(element, rootElement);
