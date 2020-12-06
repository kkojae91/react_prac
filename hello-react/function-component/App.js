import './App.css';
import React, { Component } from 'react';
import MyComponent from './MyComponent';

const App = () => {
  return (
    <MyComponent name="react" favoriteNumber={3}>
      리엑트이지롱
    </MyComponent>
  );
};

export default App;
