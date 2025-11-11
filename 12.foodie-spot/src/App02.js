import './App.css';
import {useState} from 'react';
/*
  글목록 줄이기
  1. 반복문
  2. 컴포넌트로 만들기
*/
function App() {
  const [like, setLike] = useState([0,0,0]);
  let [title, setTitle] = useState(['얌샘김밥', '이향', '초밥']);
  let [modal, setModal] = useState(false);  // '닫힘'/'열림' or  0/1 or true/false

  // 글목록을 반복문을 줄이기
  return (
    <div className="App">
      <h2>FOODIE SPOT</h2>

      <button onClick={() => {
        let copy = [...title];
        copy[0] = '김밥천국';
        setTitle(copy);
      }}>글수정</button>

      { 
        title.map((v, i) => {
          return (
            <div className="list" key={i}>
              <h4 onClick={() => {setModal(!modal)}} className="title">{v}</h4>
              <p>11월 10일 &emsp;<span onClick={() => {
                let copy = [...like];
                copy[i] += 1 ;
                setLike(copy);
              }
                }>🥇</span>&emsp;{like[i]}</p>
            </div>
          )
        }) 
      }

      { modal ? <Modal/> : null }  
    </div>
  );
}

function Modal() {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;