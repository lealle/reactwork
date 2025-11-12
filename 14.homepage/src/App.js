import './App.css';
import {Container, Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import { useState, useRef } from 'react';
import AddCloth from './component/AddCloth';
import Cloth from './component/Cloth';
import { Route, Routes,  useNavigate } from 'react-router-dom';
import Detail from './pages/Detail';

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
  let navigate = useNavigate();

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
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>detail</Nav.Link>
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
