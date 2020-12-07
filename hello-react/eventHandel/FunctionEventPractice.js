import React, { useState } from 'react';
import EventPractice from './EventPractice';

const FunctionEventPractice = () => {
  // const [username, setUsername] = useState('');
  // const [message, setMessage] = useState('');
  // const onChangeUsername = (event) => {
  //   setUsername(event.target.value);
  // };

  // const onChangeMessage = (event) => {
  //   setMessage(event.target.value);
  // };
  // 위의 코드를 아래와 같이 조금 더 편리하게 사용할 수 있습니다.
  const [form, setForm] = useState({
    username: '',
    message: '',
  });

  const { username, message } = form;
  const onChange = (event) => {
    const nextForm = {
      ...form, // 기존의 form 내용을 이자리에 복사해오기. spread 연산자
      [event.target.name]: event.target.value, // 원하는 값 덮어 씌우기
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(`${username}: ${message}`);
    // setUsername('');
    // setMessage('');
    setForm({
      username: '',
      message: '',
    });
  };

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        // onChange={onChangeUsername}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해 보세요"
        value={message}
        // onChange={onChangeMessage}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
