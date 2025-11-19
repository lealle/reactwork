import { Button, Container, Col, Row, Nav } from "react-bootstrap";
import { Navigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import './Detail.css';
import Store, { addItem, addProduct } from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Detail(props){
    let {pid} = useParams();
    let {member} = useParams();
    let findId = props.cloth.find(item =>item.id == pid);
    let [alert, setAlert] = useState(true);
    let [tab, setTab] =useState(0);
    const [fade, setFade] = useState('');
    
    const navigate = useNavigate();

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
                        const user = JSON.parse(sessionStorage.getItem('loginUser'));

                        if(!user){
                            alert('로그인 후 사용가능합니다.');
                            navigate('/login')
                            return;
                        }
                        axios.post('http://localhost:8080/react/addCart',{clothId:findId.id, title: findId.title, content:findId.content, memId: user.email})
                                .then(result=>{
                                    if(result.data == "ok"){
                                        navigate('/Cart');
                                    }
                                    console.log(result);
                                })
                                .catch((error)=>{
                                    console.log("실패",error);
                                })
                        
                    }}>장바구니에 담기</Button>
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
        <RecentViewed cloth={props.cloth}/>

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

export default Detail;