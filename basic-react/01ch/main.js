// Vanlia JS
const rootElement = document.querySelector("#root");
// const h1Element = document.createElement("h1");
// h1Element.textContent = "Hello World!";
// rootElement.appendChild(h1Element);

// React
// 아래 두가지 방법으로 createElement를 할 수 있다.
const reactElement = React.createElement("h1", null, "Hello, World!!!");
// const reactElement = React.createElement("h1", { children: "Hello, World!!" });

// DOM에 render 해야할 경우 ReactDOM.render("추가할 El", "기존 El")
ReactDOM.render(reactElement, rootElement);

console.log(reactElement);
