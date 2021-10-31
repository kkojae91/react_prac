const rootElement = document.querySelector("#root");
// <React.Fragment></React.Fragment> => 가상 부모 박스를 생성 실제로는 생성되지 않음.. => <></> 로 축약해서 사용가능!
// 여러개의 자식요소들을 임시로 감싸고 있는 부모 요소라고 생각하면 편함!
const element = (
  // <React.Fragment
  //   children={[
  //     <h1 className="title" children="Hi!" />,
  //     <h3 className="second-title" children="Bye~" />,
  //     <h5 className="last-title" children="children" />,
  //   ]}
  // />
  // 위의 코드를 아래와 같이 조금 더 html스럽게 사용할 수 있다.
  // 또한 React.Fragment를 지우고 빈 tag <></>를 사용해도 동일하게 동작한다.
  <>
    <h1 className="title">Hi!</h1>
    <h3 className="second-title">Bye~</h3>
    <h5 className="last-title">children</h5>
  </>
);

// DOM에 render 해야할 경우 ReactDOM.render("추가할 El", "기존 El")
ReactDOM.render(element, rootElement);
