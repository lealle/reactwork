import './Button.css';
// 확장자명 생략가능한건 js만 가능 나머지는 확장자명 써줘야함 

const Button = ({text, color, a, b, c})=>{

// className 이라 써줘야함 ,  class -클래스 컴포넌트 'class'는 키워드라 객체 속성(key) id는 상관없음
    return(
    <>
        <button className="btn" id="btn" style={ {backgroundColor : color[0]}}>{text}버튼</button>
        <button className="btn" id="btn" style={ {backgroundColor : color[1]}}>{a}버튼</button>
        <button className="btn" id="btn" style={ {backgroundColor : color[2]}}>{b}버튼</button>
        <button className="btn" id="btn" style={ {backgroundColor : color[3]}}>{c}버튼</button>
    </>
    )
}

export default Button;