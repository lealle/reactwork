import { useState } from "react";
/*
    * state
      : 내부에서 변경이 가능한 데이터를 다루기 위해 사용하는 객체
        일반적으로 js에서는 변수에 담지만 리액트에서는 useState()라는 리액트 함수 사용
       
      - 특징
        > state를 정의할 때 반드시 렌더링이나 데이터 흐름에 사용되는 것만 state에 사용해야 됨
        > state가 변경될 경우 component가 재렌더링이 되기 때문에 렌더링과 데이터 흐름에 관련없는 값을 포함하면
          불필요한 경우에 component가 다시 렌더링이 되어 성능을 저하 시킴
        > 재렌더링또는 데이터 흐름에 관련된 값만 useState에 포함시키고
          나머지는 conponent의 인스턴스 필드로 정의하면 됨  
*/
const Counter = () => {
  // let count = 0; // 값이 변경되는 변수
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => { setCount(count + 1) }}>+</button>&emsp;
      <button onClick={() => { setCount(count - 1) }}>-</button>
    </>
  )
}
export default Counter;