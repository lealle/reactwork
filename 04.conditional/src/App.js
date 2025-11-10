import './App.css';

function App() {
  const isStudent = true;
  /*
  if(isStudent) {
    return <h1>학생입니다</h1>
  } else {
    return <h1>학생이 아닙니다</h1>
  }
*/
  /*  문자열로 인식하여 출력
  return (
    <div className="App">
      if(isStudent) {
        <h1>학생입니다</h1>
      } else {
        <h1>학생이 아닙니다</h1>
      }
    </div>
  );
  */

  // 삼항연산자 사용 가능
  // return isStudent == true ? <h1>학생입니다</h1> : <h1>학생이 아닙니다</h1>
  return (
    // 문자열로 인식
    /*
    <div>
        <h1>삼항연산자</h1>
        isStudent == true ? <h1>학생입니다</h1> : <h1>학생이 아닙니다</h1>
    </div>
    */

    // 여러줄일 때(즉 <div>로 감싸져 있을 때) 삼항연산자로 인식하게 하려면 { }안에 넣어야됨.
    <div>
      { isStudent == true ? <h1>학생입니다</h1> : <h1>학생이 아닙니다</h1> }
    </div>
  )
}

export default App;
