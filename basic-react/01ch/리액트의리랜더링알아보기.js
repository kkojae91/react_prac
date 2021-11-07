// js 리랜더링
// const rootElement = document.querySelector("#root");

// function random() {
//   const number = Math.floor(Math.random() * (10 - 1) + 1);
//   const element = `
//     <button>${number}</button>
//   `;

//   rootElement.innerHTML = element;
// }

// setInterval(random, 1000);

// react 리랜더링
const rootElement = document.querySelector("#root");

function random() {
  const number = Math.floor(Math.random() * (10 - 1) + 1);
  const element = (
    <>
      <button>{number}</button>
      <div>
        <button>{number}</button>
      </div>
    </>
  );

  ReactDOM.render(element, rootElement);
}

setInterval(random, 1000);
