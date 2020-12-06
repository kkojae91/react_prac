import './App.css';
import React, { Component } from 'react';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';

const App = () => {
  return (
    <div>
      <MyComponent name="react" favoriteNumber={3}>
        리엑트이지롱
      </MyComponent>
      <Counter />
      <Say />
    </div>
  );
};

export default App;
