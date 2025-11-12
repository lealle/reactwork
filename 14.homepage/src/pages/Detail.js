import { Button, Container, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
 // 배열로 정보를 보여주면 삭제시 다른 정보를 보여줄수도 있음 
// id를 찾아서 그 정보를 보여주는것이 오류를 줄일 수 있음 
function Detail(props){
    let {pid} = useParams();
    let {member} = useParams();

    let findId = props.cloth.find(item =>
        item.id == pid
    );

    let [alert, setAlert] = useState(true);
    
    useEffect(()=>{
        // 3초가 지나면 alert 값을 false 로 넣으시오 
        let timer = setTimeout(()=>{setAlert(false)}, 2000);
        return()=>{
            clearTimeout(timer);
        }
    })
    // 오 잘되넹 
    // 배열 넣을시 맨 처음에 생성 없을시 리렌더링시 생성 return 있으면 unmount시 실행 
    return (    
        <div className="detail">
            {
                alert == true ? <div className="sale">3초 이내 구매시 할인</div> : null
            }
            <Container>
                <Col>
                    <img src={`${process.env.PUBLIC_URL}/img/cloth${findId.id}.jpg`}></img>
                </Col>
                <Col>
                    <h4>{findId.title}</h4>
                    <p>상품설명</p>
                    <p>{findId.price}원</p>
                    <Button variant="info">주문하기</Button>
                </Col>
            </Container>
        </div>
    )
}
export default Detail;