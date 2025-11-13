import { Button, Container, Col, Row, Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import './Detail.css';

/*
    전환 애니메이션 만들기
    css 에서 애니메이션 className 하나 만들고 
    원할 때 className을 넣었다 빼면 애니메이션 기능 
    
    css에서 
    1) 애니메이션 동작 하기 전 스타일 className 만들기
    2) 애니메이션 동작 한 후 스타일 담을 className 만들기
    3) transaction 속성 추가 (몇초동안 돌아갈건지)

    파일에서 
    4) 원할때 className 넣었다 뺴기 
*/

function Detail(props){
    let {pid} = useParams();
    let {member} = useParams();

    let findId = props.cloth.find(item =>
        item.id == pid
    );

    let [alert, setAlert] = useState(true);
    
    let [tab, setTab] =useState(0);
    const [fade, setFade] = useState('');

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
    {/* <TabContent1 tab={tab}/>
    {TabContent(tab)} 
    {TabContent1({tab})}  */}
        </div>
    )
}

// function TabContent(tab){
//     if(tab == 0){
//         return <div>내용0</div>;
//     }
//     if(tab == 1){
//         return <div>내용1</div>;
//     }
//     if(tab == 2){
//         return <div>내용2</div>;
//     }
// }
// function TabContent1({tab}){
//     const [fade, setFade] = useState('');
//     // 모아두었다 실행  해서 setTimeout 으로 해줘야 애니메이션 효과가 나옴 
//     useEffect(()=>{
//         let end = setTimeout(()=>{setFade('end')},100)
//         return() =>{
//             clearTimeout(end);
//             setFade('');
//         }
//     },[tab])
//     let arr = [
//         <h1>내용0</h1>,
//         <h1>내용1</h1>,
//         <h1>내용2</h1>
//     ];
//     // 이렇게해도 가능 (하나하나 추가하는것보다 )
//     return (
//         <div className={`start ${fade}`}>
//             {arr[tab]}
//         </div>
//     )
// }


export default Detail;