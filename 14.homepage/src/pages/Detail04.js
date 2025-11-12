import { Button, Container, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
function Detail(props){
    let {pid} = useParams();
    let {member} = useParams();

    let findId = props.cloth.find(item =>
        item.id == pid
    );

    let [alert, setAlert] = useState(true);
    
    useEffect(()=>{
        let timer = setTimeout(()=>{setAlert(false)}, 2000);
        return()=>{
            clearTimeout(timer);
        }
    })
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