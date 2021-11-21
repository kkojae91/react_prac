const rootElement = document.querySelector("#root");

// ErrorBoundary를 여러개 작성하지 않고 fallback property를 사용하면 해당 class는 한번만 작성 후 재사용 가능!
// ErrorBoundary를 사용하지 않을 경우 child에서 error가 발생했을 경우 program 전체가 뻣는 현상이 생김! 이를 방지하기 위해 ErrorBoundary를 사용
// ErrorBoundary는 함수형 Componet가 아닌 클래스형 Component만 존재!
class ErrorBoundary extends React.Component {
  state = { error: null };
  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    const { error } = this.state;
    if (error) {
      // error메세지를 props로 주기 위해서는 this.props.fallback을 Component로 만들어서 error를 props로 내려준다.
      return <this.props.fallback error={error} />;
      // error가 발생할 경우 fallback 내용을 보여줘라
      // return this.props.fallback;
    }
    // error가 발생하지 않을 경우 children의 내용을 보여줘라
    return this.props.children;
  }
}

// ErrorBoundary의 this.props.fallback Component의 error props를 받아서 alert으로 error메세지를 띄워 준다.
const Fallback = ({ error }) => {
  return <p>{error.message}</p>;
};

const Child = () => {
  throw new Error("Something wrong...");
  return <p>Child...</p>;
};

const App = () => {
  return (
    <>
      <p>App</p>
      {/* fallback을 주면 child에서 error가 발생시 fallback 문구를 띄울 수 있다. */}
      <ErrorBoundary fallback={Fallback}>
        <Child />
      </ErrorBoundary>
    </>
  );
};

ReactDOM.render(<App />, rootElement);
