import { Button, Container, Col, Row, Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import './Detail.css';
 // 배열로 정보를 보여주면 삭제시 다른 정보를 보여줄수도 있음 
// id를 찾아서 그 정보를 보여주는것이 오류를 줄일 수 있음 
function Detail(props){
    let {pid} = useParams();
    let {member} = useParams();

    let findId = props.cloth.find(item =>
        item.id == pid
    );

    let [alert, setAlert] = useState(true);
    
    let [tab, setTab] =useState(0);


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
                <Row>
                <Col >
                    <img src={`${process.env.PUBLIC_URL}/img/cloth${findId.id}.jpg`}></img>
                </Col>
                <Col >
                    <h4>{findId.title}</h4>
                    <p>{findId.content}</p>
                    <p>{findId.price}원</p>
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
    {TabContent(tab)} 
    {/* 배열이면 {}로 받아야겠지만 그냥 상수값이므로 그냥 받음  */}
    {TabContent1({tab})} 
    {/* { tab == 0 ? 
        <div>내용0</div>
     : tab == 1 ? <div>내용1</div> : <div>내용2</div>  
    } */}
        </div>
    )
}

function TabContent(tab){
    if(tab == 0){
        return <div>내용0</div>;
    }
    if(tab == 1){
        return <div>내용1</div>;
    }
    if(tab == 2){
        return <div>내용2</div>;
    }
}
function TabContent1({tab}){
    let arr = [
        <h1>내용0</h1>,
        <h1>내용1</h1>,
        <h1>내용2</h1>
    ];
    return arr[tab];
        
}


export default Detail;