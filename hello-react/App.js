import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'kkojae';
  const name2 = '리액트';
  const name3 = undefined;
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16, // '' 없이 px를 생략하면 자동으로 px이 생깁니다.
  };
  return (
    // name3 || '값이 undefined 입니다.'
    <>
      <h1 style={style}>{name} 안녕!</h1>
      <h2 className="react">잘 작동하니?</h2>
      <h3>항상 div나 fragment 혹은 지금처럼 빈 꺽새라도 넣어주어야 한다 항상 부모요소는 하나로 감싸주어야한다.</h3>
      {name2 === '리액트' ? <h1>name은 리액트 입니다.</h1> : <h1>name은 리액트가 아닙니다.</h1>}
      {name2 == '리액트' && <h1>name2는 리액트가 맞습니다.</h1>}
      {name3 || '리액트'}
      <input />
    </>
  );
}

export default App;
