import logo from './logo.svg';
import './App.css';
import Compo from './component/Compo.js';
import { name } from './../node_modules/@webassemblyjs/wasm-parser/lib/decoder';

/*
  * props
    부모가 자식 컴포넌트에게 전달하는 데이터
    자식 컴포터는틑 값변경 불가
    자식 -> 부모 : 불가 
*/
/* 1. String 값 넘겨주기 
function App() {
  const address = "서울 강남구 빌딩";
  return (
    <div className="App">
    <Compo user={"홍길동"} addr={address}/>
    
    </div>
  );
}
*/

/*
 * 2. 객체 형태값 그대로(객체의 형태로) 받기
 */
// function App() {
//   const userInfo = {
//     name : "이미영",
//     addr : "경기도 시흥시",
//     likeList : ['캐릭터','만화','웹툰']
//   }

//   return (
//     <div className="App">
//     {/* 2.1 <Compo useri={userInfo}/> 
//     객체로 넘겨주기 */}
    
//     {/* 2.2 풀어서 넘겨주기 */}
//     <Compo {...userInfo}/>    
//     {/*위의 방식(스프레드 연산자)  <Compo name={name} addr={addr} likeList={likeList}/>  랑 같음 */}
//     </div>
//   );
// }

function App(){
  return <Compo/>
}


export default App;
