/*
  * 컴포넌트
    - 리액트는 Component기반의 구조라는 특징을 가지고 있다.
    - 리액트는 모든 페이지를 Component로 구성하고 있고, 
      Component는 또 다른 여러개의 Component의 조합으로 구성될 수 있다
    - 이러한 Component들은 마치 블록을 조립하듯 끼워 맞춰 새로운 Component를 만들 수 있다.

  * Component 장점
    - 코드의 양을 줄일 수 있다.
    - 개발시간을 줄일 수 있다.
    - 유지 보수 비용이 절감된다
    
  * Component의 구성요소
    1) property(props)
       - 부모 컴포넌트에서 자식 컴포넌트에 전달되는 데이터.
         프로퍼티값으 자식 컴포넌트에서는 수정 할 수 없다.
    2) state
       - 컴포넌트의 상태를 저장하고 수정 가능한 데이터
    3) context
       - 부모 컴포넌트에서 생성하여 모든 자식 컴포넌트에게 전달하는 데이터
       
  * 컴포넌트의 종류
    - 함수 컴포넌트
    - 클래스 컴포넌트
    
  * 컴포넌트의 규칙
    - 첫글자는 대문자로 시작
    - return구문으로 JSX형식의 마크업을 반환
*/
import './App.css';

const user = {
  firstName : 'Hong',
  lastName : 'GilDong'
};

function Student(user) {
  return user.firstName + " " + user.lastName;
}

function App() {
  const isStudent = true;
  return (
    <div className="App">
      <h1>Start React 2025년 Tjoeun</h1>
      <h3>component 실습</h3>

      {isStudent ? <h4>{Student(user)}님 환영합니다</h4> : <h4>학원생이 아닙니다</h4>}

      <Com1></Com1>
      <Com1/>
      <Com1/>
    </div>
  );
}

function Com1() {
  return (
    <>
      <h2>[THIS IS COMPONENT]</h2>
      <p>고용노동부 k-digital 훈련 과정</p>
      <p>모든 과정에서 배우는 기초 과목</p>
      <ul>
          <li>java</li>
          <li>oracle</li>
          <li>html</li>
          <li>springBoot</li>
      </ul>
    </>
  )
}

export default App;
