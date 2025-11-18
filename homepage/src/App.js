import './App.css';
import {Container, Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import { useState, useRef, createContext } from 'react';
import Cloth from './component/Cloth';
import { Route, Routes,  useNavigate } from 'react-router-dom';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import SignUp from './pages/SignUp';
import clothList from './data/data2.json';
import { Button } from "react-bootstrap";
import axios from 'axios';

     
     
     
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

  // 재고 변수 
  const [stock, setStock] = useState([5,20,7,2,1,3]);

  return (
    <div className="App">
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/cart')}}>cart</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/signup')}}>SignUp</Nav.Link>
           

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
          console.log(clickCnt); 
          let copy = clickCnt+1;
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
              <Detail cloth={cloth} />
        } 
          />
        <Route path='/cart' element={
          <div>
            <Cart/>
          </div>
          } />
        
        <Route path='/signup' element={
            <div>
              <SignUp/>
            </div>
        } />
        <Route path='/*' element={<div>없는 페이지 입니다.</div>} />
      
      </Routes>
        </div>
  );
}
export default App;