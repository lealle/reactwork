// import './App.css';

// 1. 별도의 style파일 만들어서 사용
/*
function App() {
  return (
    <>
      <h1>더조은에 오신것을 환영합니다</h1>
      <h3>java 풀스택 웹 앱 개발자 과정</h3>
      <p className="class1">class로 react style적용하기</p>
      <p id="id2">id로 스타일 적용하기</p>
    </>
  );
}
*/

// 2. style변수에 객체로 저장하여 사용
/*
function App() {
  const style = {
    div : {
      backgroundColor : 'green',
      padding : '30px',
      textAlign : 'center',
    },
    h1 : {color:"red"},
    class1 : {color:'yellow'},
    id2 : {color:'pink'}
  }

  return (
    <div style={style.div}>
      <h1 style={style.h1}>더조은에 오신것을 환영합니다</h1>
      <h3>java 풀스택 웹 앱 개발자 과정</h3>
      <p style={style.class1}>class로 react style적용하기</p>
      <p style={style.id2}>id로 스타일 적용하기</p>
    </div>
  );
}
*/

// 3. inline방식으로 style 주기
function App() {
  return (
    <div style={{textAlign:'center', backgroundColor : 'gray',}}>
      <h1 style={{color:'red'}}>더조은에 오신것을 환영합니다</h1>
      <h3>java 풀스택 웹 앱 개발자 과정</h3>
      <p style={{color:'blue'}}>class로 react style적용하기</p>
      <p>id로 스타일 적용하기</p>
    </div>
  );
}
export default App;
