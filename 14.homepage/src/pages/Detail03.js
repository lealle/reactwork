import { Button, Container, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Detail(props){
    let {pid} = useParams();
    let {member} = useParams();
    console.log(pid);
    console.log(typeof(pid));
    
    return (    
        <div className="detail">
            <Container>
                <Col>
                    <img src={`${process.env.PUBLIC_URL}/img/cloth${props.cloth[pid-1].id}.jpg`}></img>
                </Col>
                <Col>
                    <h4>{props.cloth[pid-1].title}</h4>
                    <p>상품설명</p>
                    <p>{props.cloth[pid-1].price}원</p>
                    <Button variant="info">주문하기</Button>
                </Col>
            </Container>
        </div>
    )
}
export default Detail;