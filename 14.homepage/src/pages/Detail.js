import { Button, Container, Col, Row, Nav } from "react-bootstrap";
import { Navigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import './Detail.css';
import Store, { addItem, addProduct } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Detail(props){
    // 최근 본 상품 하고 넣어주기 (useEffect 사용하여 )

    let dispatch = useDispatch();
    const navigate = useNavigate();

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
    
    useEffect(()=>{
        let p = localStorage.getItem('recentProduct'); // json 반환
        if ( p  === null) { // 없을시 생성 
            localStorage.setItem('recentProduct', JSON.stringify([]));
            p = '[]'; 
        }
        p = JSON.parse(p) // 객체로 변환 
        p.push(findId.id); // 객체로 push
        p = [...new Set(p)];
        p = JSON.stringify(p); // json 변환 
        localStorage.setItem('recentProduct',p)
    },[])



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
                    <Button variant="info" onClick={()=>{
                        dispatch(addProduct(findId));
                        navigate('/Cart');
                    }}>주문하기</Button>
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

        <RecentViewed cloth={props.cloth} />

        </div>
    )
}

function RecentViewed({cloth}){
    const [recent, setRecent] = useState([]);
    useEffect(()=>{
        let p = localStorage.getItem('recentProduct'); // json 반환
        p = JSON.parse(p) // 객체로 변환 
        p = p.slice().reverse();
        
        let products = p.map(id => cloth.find(c => c.id == id))
                         .filter(Boolean)
        setRecent(products)
    },[cloth])
    return(
         <div>
            <h4>⚆_⚆ 최근 본 상품</h4>
            <div style={{display:'flex'}}>
                {
                    recent.map(item => (
                        <div>
                            <img src={`${process.env.PUBLIC_URL}/img/cloth${item.id}.jpg`} style={{width: '40%'}}/>
                            <div>
                                <strong>{item.title}</strong>
                                <p>{item.price}원</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )

}
function RecentViewed1({cloth}){
        let p = localStorage.getItem('recentProduct'); // json 반환
        p = JSON.parse(p) // 객체로 변환 
        let cloth1 = cloth.filter((x) => p.includes(x.id));
    return (
        <table>
            <tbody>
                {
                cloth1.map((c) => (
                    <tr key={c.id}>
                        <td>{c.id}</td>
                        <td>{c.name}</td>
                        <td>{c.count}</td>
                    </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

export default Detail;