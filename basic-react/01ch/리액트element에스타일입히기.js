const rootElement = document.querySelector("#root");

// custom element Props로 전달 받아 className, style, children을 설정할 수 있다.
function Button({ color, style, ...rest }) {
  return (
    <button
      className={`button ${color}`}
      style={{ borderRadius: 8, ...style }}
      {...rest}
    />
  );
}

const element = (
  <>
    <Button style={{ borderRadius: "50%" }}>Green</Button>
    <Button color="blue">Blue</Button>
    <Button color="red">Red</Button>
    <Button color="gray">Gray</Button>
    <Button color="black">Black</Button>
  </>
);

ReactDOM.render(element, rootElement);
