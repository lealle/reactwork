import { Button, Container, Col, Row, Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import './Detail.css';
import { Context1 } from '../App';


function Detail(props){
    
    // useContext() : Context1를 해체해 준다. {stock,cloth} 
    let a = useContext(Context1);
    // console.log(a);
    // console.log(a.stock);
    // console.log(a.cloth);

    let {pid} = useParams();
    let {member} = useParams();

    let findId = props.cloth.find(item =>
        item.id == pid
    );

    let [alert, setAlert] = useState(true);
    
    let [tab, setTab] =useState(0);
    const [fade, setFade] = useState('');
    let stock = a.stock;

    useEffect(()=>{
        let timer = setTimeout(()=>{setAlert(false)}, 2000);
        return()=>{
            clearTimeout(timer);
        }
    })

    useEffect(()=>{
        let end = setTimeout(()=>{setFade('end')},100)
        return() =>{
            clearTimeout(end);
            setFade('');
        }
    },[tab])
    return (    
        <div className="detail">
            {
                alert == true ? <div className="sale">3초 이내 구매시 할인</div> : null
            }
            <Container>
                <Row>
                <Col >
                    <img src={`${process.env.PUBLIC_URL}/img/cloth${findId.id}.jpg`}></img>
                </Col>
                <Col >
                <div className={`start ${fade}`}>
                    <h4>{findId.title}</h4>
                    <p>{findId.content}</p>
                    <p>{findId.price}원</p>
                </div>
                    <Button variant="info">주문하기</Button>
                </Col>
                </Row>
            </Container>

    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link onClick={()=>{
            setTab(0);
        }}>버튼0</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={()=>{
            setTab(1);
        }}>버튼1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={()=>{
            setTab(2);
        }}>
          버튼2
        </Nav.Link>
      </Nav.Item>
    </Nav>
        </div>
    )
}


export default Detail;