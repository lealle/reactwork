import logo from './logo.svg';
import './App.css';
import {Container, Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import { useState, useRef } from 'react';
import AddCloth from './component/AddCloth';
import Cloth from './component/Cloth';
import { ReactDOM } from 'react-dom/client';

/*
  * 다른 페이지로 가기 
    > 기존의 페이지
    1. html파일로 상세보기 페이지 만들기
    2. /detail로 접속하면 html 보여줌 
  
  * React에서 페이지 나누기
    1. 컴포넌트로 상세페이지 만들기
    2. /detail로 접속하면 기존의 index.html파일을 모두 비운후 상세페이지 보여줌(싱글페이지) 

  * react-router-dom : 페이지를 교체시켜주는 api 
    1. 설치 : npm i react-router-dom 
    2. index.js 에 <BrowerRouter> 태그로 감싸기 
*/



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

  const cnt = useRef(3);
  const [cloth, setCloth] = useState(depCloth);

  const addCloth = (content, price) =>{
    const c = {
      id : cnt.current++,
      title : content,
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
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg'></div>
      <Container>
        <Row>
            <AddCloth addCloth={addCloth}/>
          
 
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
  );
}

export default App;
