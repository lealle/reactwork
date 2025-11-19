import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import DaumPostcodeEmbed from 'react-daum-postcode';



const SignUp = () =>{
    const [form, setForm] = useState({
        email: '',
        password: '',
        name: '',
        birthday: '',
        gender: '',
        phone: '',
        address: '',
        detailAddress: ''
    })

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setForm({
            ...form,
            [name] : value
        })

        if(name == 'email'){
            setEmailCheckMessage('');
            setIsEmailCheck(false);
        }
    }

    const [isEmailCheck, setIsEmailCheck] = useState(false);
    
    const handleSubmit = (e)=>{
        // 개인적 실수를 통한 학습 
         e.preventDefault();
         // 브라우저의 기본 동작 막기
         // submit 기본동작 -> 폼 전송 후 페이지 새로고침
         // e.preventDefault(); -> 새로고침 없음 -> axios를 통해 비동기(AJAX)로 전송
        if(!isEmailCheck){
            alert("이메일 중복 확인을 해주세요");
            return;
        }
        axios.post('http://localhost:8080/react/signup',form)
            .then(()=>{
                alert('회원가입 성공')
                window.location.href = '/';  
            })
            .catch(()=>{
                alert('회원가입 실패');
            })
    }

    const checkEmail = () =>{
        axios.get('http://localhost:8080/react/email-check', {params: {email: form.email}})
            .then(result=>{
                if(result.data){
                    setEmailCheckMessage('사용 가능한 이메일 입니다.');
                    setIsEmailCheck(true);
                } else {
                    setEmailCheckMessage('이미 사용중인 이메일 입니다.');
                    setIsEmailCheck(false);
                    
                }
            })
            .catch(()=>{
                alert('이메일 확인 중 오류가 발생했습니다.')
            })

    }

    const [emailCheckMessage, setEmailCheckMessage] = useState('');

    const [showPostCode, setShowPostCode] = useState(false);

    const handleComplete = (data) =>{
        setForm({...form, address: data.address});
        setShowPostCode(false);
    }

    return(
        <div>
            <br></br>
            <br></br>
            
            <h2>회원가입</h2>
            <br></br>
            <br></br>

            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} className="mb-3"  >
                    <Form.Label column sm="5"> Email</Form.Label>
                    <Col sm="3">
                        <Form.Control type='email' name='email' placeholder="Email" required onChange={handleChange}/>
                    </Col>
                    <Col sm="3">
                        <Button onClick={checkEmail}>중복확인</Button>
                    </Col>
                    {
                        emailCheckMessage && (
                        <span style={{color:isEmailCheck ? 'green' : 'red' , fontSize:'0.8em', marginTop:'5px'}}>
                            {emailCheckMessage}
                        </span>
                    )
                    }

                </Form.Group>
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="5">Password</Form.Label>
                    <Col sm="3">
                        <Form.Control type="password" name='password' placeholder="Password" required onChange={handleChange}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="5">Name</Form.Label>
                    <Col sm="3">
                        <Form.Control  name='name' placeholder="Name" required onChange={handleChange}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="5">Phone</Form.Label>
                    <Col sm="4">
                        <Form.Control type="text" name='phone' placeholder="Phone" onChange={handleChange}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="5">Gender</Form.Label>
                    <Col sm="3">
                        <input type="radio" name="gender" value="남" onChange={handleChange}></input>남&emsp;&emsp;&emsp;
						<input type="radio" name="gender" value="여"  onChange={handleChange}></input>여
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="5">Address</Form.Label>
                    <Col sm="4">
                        <Form.Control type="text" name='address' placeholder="address" value={form.address} 
                            onChange={handleChange}/>
                        <Form.Control type="text" name='detailAddress' placeholder="detailAddress" onChange={handleChange}/>
                    </Col>
                    <Col>
                        <Button onClick={()=>{
                            setShowPostCode(true);
                        }}>주소검색</Button>
                    
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="5">Birth</Form.Label>
                    <Col sm="3">
                        <Form.Control type="date" name='birth' placeholder="ex)20010217" onChange={handleChange}/>
                    </Col>
                </Form.Group>
                <Button type='submit'>회원가입</Button>
            </Form>


        <Modal show={showPostCode} onHide={()=>setShowPostCode(false)} >
            <Modal.Header closeButton>
            <Modal.Title>주소검색</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <DaumPostcodeEmbed onComplete={handleComplete} />
            </Modal.Body>
        </Modal>
        </div>
    )
}


const style = {
    container : {
        textAlign : 'center',
        marginTop : '40px',
    },
    title : {
        textAlign: 'center',
        marginBottom : '20px'
    },
    form : {
        margin: '0 auto',
        width : '80%'
    }
}

export default SignUp;