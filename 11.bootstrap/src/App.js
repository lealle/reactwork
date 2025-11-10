import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// index 혹은 App.js 둘 중 하나만 넣음 됨 

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

import {Button, Card} from 'react-bootstrap';
// 이렇게 여러개 할 수도 있음 

import Header from './component/Header';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <Header/>
      <section/>
      <Footer/>
    </>
  );
}


export default App;
