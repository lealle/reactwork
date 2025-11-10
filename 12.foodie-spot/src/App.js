import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  return (
    <div className="App">
      <h2>FOODIE SPOT</h2>
      <div className="list">
        <h4>얌샘김밥</h4>
        <p>11월 10일 <span onClick={()=>setCount1(count1+1)}>❤</span> {count1} </p>
      </div>
      <hr></hr>
      <div className="list">
        <h4>얌샘초밥</h4>
        <p>11월 10일 <span onClick={()=>setCount2(count2+1)}>❤</span> {count2} </p>
      </div>
      <hr></hr>
      <div className="list">
        <h4>얌샘국밥</h4>
        <p>11월 10일 <span onClick={()=>setCount3(count3+1)}>❤</span> {count3} </p>
      </div>

    </div>
  );
}

export default App;
