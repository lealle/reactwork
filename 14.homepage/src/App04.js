import logo from './logo.svg';
import './App.css';
import {Container, Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import { useState, useRef } from 'react';
import AddCloth from './component/AddCloth';
import Cloth from './component/Cloth';
import { Route, Router, Routes, Link, useNavigate } from 'react-router-dom';
import Detail from './pages/Detail';
// public 정적(변하지않음), import 안해도됨
// src안 react가 관리함 경로 달라질 수 있음  
// 그래서 보통 그림은 public에 넣는게 편함 
// 

const depCloth = [
  {
    id : 1,
    title : "asd", 
    price : 140000
  },
  {
    id : 2,
    title : "dsd", 
    price : 240000
  }
]


function App() {

  const cnt = useRef(3); // 1부터 시작이라 
  const [cloth, setCloth] = useState(depCloth);
  let navigate = useNavigate();

  const addCloth = (content, price) =>{
    const c = {
      id : cnt.current++,
      title : content,
      price : price
    }
    setCloth([...cloth,c]);
  }

  // useNavigate() : 페이지 이동을 도와주는 함수 

  return (
    <div className="App">
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>detail</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/cart')}}>cart</Nav.Link>
           
            {/* <Nav.Link onClick={()=>{navigate(-1)}}>-1</Nav.Link>
            <Nav.Link onClick={()=>{navigate(1)}}>+1</Nav.Link>
            앞으로 뒤로   */}
            {/* <Nav.Link href="/detail">detail</Nav.Link> */}
            {/* 새로고침 여부의 차이(state 유지차이) href는 새로고침 onClick은 새로고침 안함  */}
          </Nav>
        </Container>
      </Navbar>

      {/* <Link to="/">Home</Link>&emsp;
      <Link to="/detail">상세페이지</Link>&emsp;
      <Link to="/cart">카트</Link> */}

      <Routes>
        {/* 하나당 하나의 페이지  */}
        <Route path='/' element={
          <div>
        <div className='main-bg'></div>
        <Container>
          <Row>
          { 
                cloth.map((clo,i) => {
                    return (
                      <Col>               
                        <Cloth clo={clo} i={i}/>
                      </Col>
                    )
                }) 
          }
            <Col>2 of 3</Col>
          </Row>
      </Container>
          
          </div>
        }/> 
        {/* 1. url 파라미터 사용 - localhost:3000/detail/1 > 받을 때 useParams() : 주로 고정적인것 사용시 */}
        {/*                    - localhost:3000/detail?id=5 > 받을 때 useSearchParams() : 변하는값 사용시 */}
        {/* let [params, setParams] = useSearchParams(); 가운데는 변수이름으로 (id면 Id , search는 Search) 
            params.get('search');

            <Route path='/detail:마음대로' element={
          <div>
            <Detail cloth={cloth}/>
          </div>
        } 


        */}
        
        {/* 값을 여러개 넘겨줄때  */}
        {/* <Route path='/detail/:pid/name/:member' element={ */}
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
