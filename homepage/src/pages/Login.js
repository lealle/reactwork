import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';



const Login = () =>{
    const [form, setForm]= useState({
        email : '',
        password : ''
    })

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setForm({
            ...form,
            [name] : value
        })
    }

     const handleSubmit = (e)=>{
         e.preventDefault();
        axios.post('http://localhost:8080/react/login',form)
            .then(res=>{ // localStorage 혹은 sessionStorage 에 넣어 가져옴 
                if(res.data){
                    alert('로그인 성공');
                    const userInfo = {
                        name : res.data.name,
                        email : res.data.email,
                    }
                    sessionStorage.setItem('loginUser',JSON.stringify(userInfo))
                    window.location.href = '/';  
                }else{
                    alert('로그인 실패 : 이메일 또는 비밀번호가 맞지 않습니다.');
                }
            })
            .catch(()=>{
                alert('로그인 오류 발생');
            })
    }

    return(
        <div style={style.container}>
            <h2 style={style.title}> 로 그 인</h2>
            <Form style={style.form} onSubmit={handleSubmit}>
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="5">Email</Form.Label>
                    <Col sm="3">
                        <Form.Control type="email" name='email' placeholder="Email" required onChange={handleChange}/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" >
                    <Form.Label column sm="5">Email</Form.Label>
                    <Col sm="3">
                        <Form.Control type="password" name='password' placeholder="Password" required onChange={handleChange}/>
                    </Col>
                </Form.Group>
                <Button type="submit">로그인</Button>
            </Form>
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

export default Login;