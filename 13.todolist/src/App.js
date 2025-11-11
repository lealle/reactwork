import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Editer from './component/Editer';
import List from './component/List';
import { useRef, useState } from 'react';




const tmpDate = 
  [
    {
      id : 0,
      isDone : false, // 체크박스
      content : 'React 공부하기',
      date : new Date().getTime
    },
    {
      id : 1,
      isDone : false, // 체크박스
      content : '꿀맛같은 휴식',
      date : new Date().getTime
    },
    {
      id : 2,
      isDone : false, // 체크박스
      content : '친구와 채팅하기',
      date : new Date().getTime
    }
  ];

function App() {
  const [todos, setTodos]=useState(tmpDate);

  // id 를 기존 데이터의 id 번호 다음으로 세팅하기
  /*
    useRef() : React Hook 중 하나
    컴포넌트가 리렌더링 되더라도 값이 유지되는 컨테이너 역할을 함 
  */

  const cnt = useRef(3); // id 0~2 있어 3번 부터 시작
  const onCreate = (content) => {
    const newItem = {
      id : cnt.current++,
      isDone : false, 
      content : content,
      date : new Date().getTime
    }
    setTodos([newItem, ...todos])
  }
  const onDelete = (id) =>{
    let copy = [...todos];
    copy.unshift(id,1);
    setTodos(copy);
  }
  console.log(todos);
  return (
    <div className="App">
      <Header />
      <Editer onCreate={onCreate} />
      <List todos={todos}/>
    </div>
  );
}

export default App;
