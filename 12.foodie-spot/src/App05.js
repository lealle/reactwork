import './App.css';
import {useState} from 'react';
/*
  input 에 글자를 받아서 title에 저장 
*/
function App() {
  const [like, setLike] = useState([0,0,0]);
  let [title, setTitle] = useState(['얌샘김밥', '이향', '초밥']);
  let [modal, setModal] = useState(false);  
  let [modalIndex, setIndex] = useState(0); 
  let [editTitle, setEditTitle] = useState('');
  return (
    <div className="App">
      <h2>FOODIE SPOT</h2>

      { 
        title.map((v, i) => {
          return (
            <div className="list" key={i}>
              <h4 onClick={() => {setModal(!modal); setIndex(i)}} className="title">{v}</h4>
              <p>11월 10일 &emsp;<span onClick={() => {
                let copy = [...like];
                copy[i] += 1 ;
                setLike(copy);
              }
                }>🥇</span>&emsp;{like[i]}</p>


                <button onClick={()=>{
                  let copy = [...title];
                  let l = [...like];
                  copy.splice(i,1);
                  l.splice(i,1);
                  setTitle(copy);
                  setLike(l)
                }}>삭제</button>


            </div>
          )
        }) 
      }
    { modal ? <Modal like={like} setLike={setLike} title={title} modalIndex={modalIndex} setTitle={setTitle} setEditTitle={setEditTitle} editTitle={editTitle}/> : null }  
    </div>
  );
}

function Modal({like, setLike, title, modalIndex,setTitle,setEditTitle,editTitle}) {
  return (
    <div className='modal'>
      <h4>{title[modalIndex]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      
      <input className='edit' onChange={(e)=>{
         setEditTitle(e.target.value);
      }}/>
      <button onClick={() => {
        let c = [...title];
        c.unshift(editTitle);
        // setTitle(title.unshift(editTitle)); 이건 안되더라 
        
        let l = [...like];
        l.unshift(0);
        
        setTitle(c);
        setLike(l)
        
        // let copy = [editTitle ,...title]; 이건됨 추천하더라 
        // setTitle(copy);
      }}>글추가</button>

    </div>
  )
}


export default App;