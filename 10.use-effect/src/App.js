import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Views from './component/View'
import Controller from './component/Controllers';
/*
  useEffect()
    컴포넌트의 life cycle을 관리하는 리액트 Hook
    컴포넌트가 생성될 때(mount) -> update 될 때 -> 삭제될 때(unmount)
    이런 lifecycle에서 랜더링 될 때마다 특정작업(side Effect)
    - side effect : 컴포넌트가 렌더링 된 이후에 비동기로 처리되어야 하는 부수적인 효과들

    사용
      타이머, mount 된 후 바로 서버에서 데이터를 백그라운드로 가져올 때...

    사용법
      useEffect(()=> {실행할 내용}, [배열])
*/


function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const onChangeInput = (e) =>{
    setText(e.target.value);
  }

  const onClickBtn = (value) =>{
    setCount(count + value);
  }
  /*
  // 객체가 생성될 때(mount) => 빈배열 넣어줌
  useEffect(() => {
    console.log('mount');
  },[]);

  // 어떠한 객체든 update될때마다 호출 => 배열 없음
  useEffect(() => {
    console.log('update');
  });
  

  // count값이 update될 때만 호출
  useEffect(() => {
    console.log('count update');
  },[count]);
 */

  // count와 text값이 update될 때만 호출
  useEffect(() => {
    console.log('count와 text중 하나 update');
  },[count, text]);

  // unmount 될때 => return사용
  useEffect(() => {
    console.log("mount");
    return () => {
      console.log("unMount");
    }
  },[]);

  return (
    <div className="App">
      <h1>Counter</h1>
      <input value={text} onChange={onChangeInput}/>
      <Views count={count}/>
      <Controller onClickBtn={onClickBtn}/>
    </div>
  );
}

export default App;
