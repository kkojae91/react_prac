// Vanlia JS
const rootElement = document.querySelector("#root");
// const h1Element = document.createElement("h1");
// h1Element.textContent = "Hello World!";
// rootElement.appendChild(h1Element);

// React
// 아래 두가지 방법으로 createElement를 할 수 있다.
// const reactElement = React.createElement("h1", null, "Hello, World!!!");
// props에 className: "title"을 주게 되면 <h1 class="title"></h1> 를 그리게 됩니다.
// props에 children보다 3번째 인자에 넘겨주는 값이 더 우선시 되어 그려진다.
// children, 3번째 인자 모두 배열을 사용할 수 있다. ['Hello, world!', "It's me"]; 두 문자열 모두 출력
// const reactElement = React.createElement(
//   "h1",
//   {
//     className: "title",
//     children: "Hello, World!!",
//   },
//   ["hello, World!!", "It's Me"]
// );

// 변수를 jsx 문법에 사용할 수 있는 가장 큰 장점이 생긴다!, 모든 곳에 변수명 사용가능!!
// jsx에 변수를 사용할 경우 {변수명} 으로 사용하면 된다.
// {...변수명} => 스프레드 연산 사용 가능!!
const text = "Hello, World!!!!?";
const titleClassName = "title12";
const props = { className: titleClassName, children: text };
// const customH1Element = <h1 {...props} />;
const customH1Element = (
  <h1 className={props.className} children={props.children} />
);
// const customH1Element = <h1 className={titleClassName}>{text}</h1>;
const reactElement = customH1Element;

// DOM에 render 해야할 경우 ReactDOM.render("추가할 El", "기존 El")
ReactDOM.render(reactElement, rootElement);

console.log(reactElement);
