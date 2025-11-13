import './App.css';
import {Container, Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import { useState, useRef } from 'react';
import AddCloth from './component/AddCloth';
import Cloth from './component/Cloth';
import { Route, Routes,  useNavigate } from 'react-router-dom';
import Detail from './pages/Detail';
import clothList from './data/data2.json';
import { Button } from "react-bootstrap";
import axios from 'axios';

// AJAX 사용하기
//  설치하기 : npm install axios
// https://raw.githubusercontent.com/lealle/data/refs/heads/main/data2.json
// https://raw.githubusercontent.com/lealle/data/refs/heads/main/data3.json


function App() {

  const [clickCnt, setClickCnt] = useState(3);
  const goDetail = (i) => {
    navigate(`/detail/${i}`);
  }

  const cnt = useRef(3); 
  const [cloth, setCloth] = useState(clothList);
  let navigate = useNavigate();

  const addCloth = (title, content, price) =>{
    const c = {
      id : cnt.current++,
      title : title,
      content : content,
      price : price
    }
    setCloth([...cloth,c]);
  }


  return (
    <div className="App">
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate(`/detail`)}}>detail</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/cart')}}>cart</Nav.Link>
           

          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={
          <div>
        <div className='main-bg'></div>
        <Container>
          <Row>
          { 
                cloth.map((clo,i) => {
                    return (
                      <Col key={i}>               
                        <Cloth clo={clo} i={i} goDetail={goDetail}/>
                      </Col>
                    )
                }) 
          }
          </Row>
      </Container>
      <Button variant="success" onClick={()=>{
        axios.get(`https://raw.githubusercontent.com/lealle/data/refs/heads/main/data${clickCnt}.json`)
        .then(result =>{
          // 성공 핸들링
          console.log(clickCnt); 
          let copy = clickCnt+1;
          console.log(result); // data 
          console.log(result.data); // 배열 객체 3개 그래서 가져올때 이렇게 써야함 
          setCloth([...cloth, ...result.data]);
          
          setClickCnt(copy);
        })
        .catch(()=>{
          console.log("axios 실패");
          alert("더이상 상품이 없습니다.");
        });
      }}>서버에서 데이터 가져오기</Button>
          </div>
        }/> 
        <Route path='/detail/:pid' element={
          <div>
            <Detail cloth={cloth}/>
          </div>
        } 
          />
        <Route path='/cart' element={<div>장바구니임</div>} />
        <Route path='/*' element={<div>없는 페이지 입니다.</div>} />
      </Routes>
        </div>
  );
}
export default App;
