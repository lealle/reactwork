import { useState } from 'react';
import {Button, Form, Modal} from 'react-bootstrap';

const Header = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <header className='header'>
                <img src={'https://img.megastudyacademy.co.kr/campus/logo/head_mcl_logo.jpg'} className='logo' />
                <h1>Tjoeun</h1>
                <div>
                    <Button variant="outline-secondary">회원가입</Button>&emsp;
                    <Button variant="outline-success" 
                            onClick={handleShow}>로그인</Button>
                </div>
                <Login show={show} handleClose={handleClose} />
        </header>
    )
}

function Login({show, handleClose}) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Header;