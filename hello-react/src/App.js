import React from 'react';
import './App.css';
import MyComponent from './Components/MyComponent';
import MyComponentFunc from './Components/MyComponentFunc';

function App() {

  let name = '리액트';
  return (
      <div className='App'>
        {/* <h1>Hello 리액트!!</h1> */}
        {/* <MyComponent name={name} value={3}/> */}
        <MyComponent value={100}/>
        <MyComponentFunc name={name} value={3000}/>
      </div>
  );
}

export default App;
