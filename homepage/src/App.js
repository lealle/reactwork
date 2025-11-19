import './App.css';
import {Container, Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import { useState, useRef, createContext, useEffect } from 'react';
import Cloth from './component/Cloth';
import { Route, Routes,  useNavigate } from 'react-router-dom';
import Detail from './pages/Detail';
import Cart from './pages/Cart';
import SignUp from './pages/SignUp';
import clothList from './data/data2.json';
import { Button } from "react-bootstrap";
import axios from 'axios';
import Login from './pages/Login';

     
     
     
function App() {
  const [loginUser, setLoginUser] = useState(null);
  
  useEffect(()=>{
    if(sessionStorage.getItem('loginUser')){
      setLoginUser(JSON.parse(sessionStorage.getItem('loginUser')));
    }
  }, [])

    
  const [clickCnt, setClickCnt] = useState(3);
  const goDetail = (i) => {
    navigate(`/detail/${i}`);
  }

  const [cloth, setCloth] = useState(clothList);
  let navigate = useNavigate();


  return (
    <div className="App">
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{
              if(!loginUser){
                alert('로그인 후 사용할 수 있는 기능입니다.');
                return;
              }
              navigate('/cart')}}>cart</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/signup')}}>{loginUser ? '' : 'SignUo' }</Nav.Link>
            <Nav.Link onClick={()=>{
              if(loginUser){
                sessionStorage.removeItem('loginUser');
                setLoginUser(null)
                navigate('/')
              }else{
                navigate('/login')
              }
              }}>{loginUser ? 'Logout' : 'Login' }</Nav.Link>
           

          </Nav>
          <Nav>
              {loginUser && (<Navbar.Text style={{color:'white'}}>{loginUser.name}님 로그인상태</Navbar.Text>)}
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
        <Route path='/login' element={
            <div>
              <Login/>
            </div>
        } />
        <Route path='/*' element={<div>없는 페이지 입니다.</div>} />
      
      </Routes>
        </div>
  );
}
export default App;