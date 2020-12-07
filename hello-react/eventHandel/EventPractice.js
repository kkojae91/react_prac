import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    username: '',
    message: '',
  };

  // constructor(props) {
  //   super(props);
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // handleChange(event) {
  //   this.setState({
  //     message: event.target.value,
  //   });
  // }

  // handleClick() {
  //   alert(this.state.message);
  //   this.setState({
  //     message: '',
  //   });
  // }
  // 위의 작업은 새 메서드를 만들때마다 constructor를 새롭게 설정해줘야하는 번거로움이 있습니다.
  // 바벨의 transform-class-properties문법을 사용하면 조금더 간편하게 작성하실 수 있습니다.
  // 아래와 같이 훨씽 더 깔끔하게 코드를 작성할 수 있습니다.
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleClick = () => {
    alert(`${this.state.username}: ${this.state.message}`);
    this.setState({
      username: '',
      message: '',
    });
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.handleClick();
    }
  };
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username} // 초기화 시켜주기 위해 value에 state.message값을 할당 해둔다.
          onChange={
            this.handleChange
            // (event) => {
            // this.setState({
            //   message: event.target.value,
            // });
            // }
          }
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button
          onClick={
            this.handleClick
            //   () => {
            //   alert(this.state.message);
            //   this.setState({
            //     message: '',
            //   });
            // }
          }
        >
          확인
        </button>
      </div>
    );
  }
}

export default EventPractice;
