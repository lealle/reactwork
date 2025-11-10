import Button from "./Button";

/*
const Compo = props => {
    // 객체 형태로 받음 몇개로 들어오든 하나 (변수이름은 마음대로)
    return (
        <>
        <h3>본문입니다.</h3>
        <p>{props.user}님은 {props.addr}에서 수업을 받습니다.</p>
        
        </>
    )
}
*/
// 2. 객체의 형태값 받기
// const Compo = props => {
//     return (
//         <>
//             {/* 
//             2.1
//             <h3>본문입니다.</h3>
//             <p>{props.useri.name}님은 {props.useri.addr}에서 수업을 받습니다.</p>
//             <p>{props.useri.name}님이 좋아하는 것은 {props.useri.likeList}의 
//                 {props.useri.likeList.length}개를 좋아합니다.</p>
//             <p>특히 {props.useri.likeList[2]}를 더 좋아합니다.</p> */}
        
//             {/* 스프레드 연산자 사용시 
//             2.2 객체를 풀어서 보낼때 받기
//             */}
//             {/* <h3>본문입니다.</h3>
//             <p>{props.name}님은 {props.addr}에서 수업을 받습니다.</p>
//             <p>{props.name}님이 좋아하는 것은 {props.likeList}의 
//                 {props.likeList.length}개를 좋아합니다.</p>
//             <p>특히 {props.likeList[2]}를 더 좋아합니다.</p>
//              */}
            
//             {/* 2.3 객체를 풀어서 보내고 객체 분해할당으로 받기 */}
//             <h3>본문입니다.</h3>
//             <p>{props.name}님은 {props.addr}에서 수업을 받습니다.</p>
//             <p>{props.name}님이 좋아하는 것은 {props.likeList}의 
//                 {props.likeList.length}개를 좋아합니다.</p>
//             <p>특히 {props.likeList[2]}를 더 좋아합니다.</p>
//         </>
//     )
// }


// 2. 객체의 형태값 받기

// const Compo = ({name, addr, likeList}) => {
//     return (
//         <>
//             {/* 2.3 객체를 풀어서 보내고 객체 분해할당으로 받기 */}
//             <h3>본문입니다.</h3>
//             <p>{name}님은 {addr}에서 수업을 받습니다.</p>
//             <p>{name}님이 좋아하는 것은 {likeList}의 
//                 {likeList.length}개를 좋아합니다.</p>
//             <p>특히 {likeList[2]}를 더 좋아합니다.</p>
//         </>
//     )
// }

const Compo = ()=>{
    const btnProps = {
        text : "내가만든버튼",
        color : ["hotpink","yellow","green","cyan"],
        a : 1,
        b : 2,
        c : 3
    }
  
    function btnClick(e){
    alert("버튼 눌렀어?");
    console.log(e);
    console.log(e.target.name);
  }

  return(
    <>
        <h3>본문입니다</h3>    
        <button onClick={btnClick} name="A버튼">A버튼 이벤트</button><br></br><br/>
        <button onClick={btnClick} name="B버튼">B버튼 이벤트</button><br></br><br/>
        <Button {...btnProps}/>

    </>
  )
}
export default Compo;