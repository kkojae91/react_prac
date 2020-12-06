import React, { Component } from 'react';

class Counter extends Component {
  // constructor(props) {
  //   super(props);
  //   // state의 초깃값 설정하기
  //   this.state = {
  //     number: 0,
  //     fixedNumber: 0,
  //   };
  // }
  // 위의 constructor를 아래와 같이 간단하게 state를 사용해서 쓸 수 있습니다. 위와 아래의 코드는 같습니다.
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state; // state를 조회할때는 this.state로 조회합니다.
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 {fixedNumber}</h2>
        <button //button click시 호출할 함수를 지정한다.
          onClick={() => {
            // this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
            this.setState({ number: number + 1 });
            // this.setState({ number: this.state.number + 1 });
            // this.setState((prevState) => {
            //   return {
            //     number: prevState.number + 1,
            //   };
            // });
            // 위의 코드와 아래의 코드는 동일하게 동작합니다.
            // setState를 하고 난 다음 또 다른 행위를 하고 싶을 땐 아래와 같이 prevState를 사용 해주면 됩니다.
            this.setState((prevState) => ({
              number: prevState.number + 1,
            }));
          }}
        >
          +1 button
        </button>
        <button
          onClick={() => {
            // this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
            // 두번째 파라미터에 callback 함수를 등록하여 작업을 처리 할 수 있습니다.
            this.setState(
              {
                number: number - 1,
              },
              () => {
                console.log('방금 setState가 호출 되었습니다.');
                console.log(this.state);
              }
            );
          }}
        >
          -1 button
        </button>
        <button
          onClick={() => {
            // this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
            this.setState({ number: 0 });
          }}
        >
          reset button
        </button>
      </div>
    );
  }
}

export default Counter;
