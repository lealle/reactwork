import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  let [title, setTitle] = useState(['얌샘김밥','이향','초밥']);
  return (
    <div className="App">
      <h2>FOODIE SPOT</h2>
      {/* 
      배열의 주소가 복사되어 주소는 바뀌지 않음 그러므로 리렌더링이 안됨 
      <button onClick={()=>{
        let copy = title;
        // 주소만 복사하여(바뀐것도 없어서) 리렌더링안되여 안받아짐 
        copy[0] = '김밥천국';
        setTitle(copy)}}>글수정</button>
        */}

      <button onClick={()=>{
        // 새로운 배열 생성 (주소바뀜) 리렌더링 됨 / 원래 타이틀은 그대로 존재 하다 setTitle로 변경 
        let copy = [...title];
        copy[0] = '김밥천국';
        setTitle(copy)}}>글수정</button>



      <div className="list">
        <h4>{title[0]}</h4>
        <p>11월 10일 <span onClick={()=>setCount1(count1+1)}>❤</span> {count1} </p>
      </div>
      <hr></hr>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>11월 10일 <span onClick={()=>setCount2(count2+1)}>❤</span> {count2} </p>
      </div>
      <hr></hr>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>11월 10일 <span onClick={()=>setCount3(count3+1)}>❤</span> {count3} </p>
      </div>

    </div>
  );
}

export default App;
