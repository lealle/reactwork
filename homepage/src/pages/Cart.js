import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useState, useEffect } from 'react';


function Cart(){
    const [list, setList] = useState([]);

    useEffect(()=>{
        axios.get('/react/getCart')
            .then(result =>{
                setList(result.data);
            })
            .catch(error=>{
                console.log("실패",error);
            })
    },[])

    return(
        <>
            <br></br>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>번호</th>
          <th>상품명</th>
          <th>수량</th>
          <th>버튼</th>
        </tr>
      </thead>
      <tbody>

        {
            list.map((c,i) =>{
                return(
                    <tr key={i}>
                        <td>{c.id}</td>
                        <td>{c.title}</td>
                        <td>{c.count}</td>
                        <td><Button onClick={()=>{
                    
                        }}>수량 변경</Button></td>
                    </tr>
                )
            })
        } 
      </tbody>
    </Table>
        </>
    )
}

export default Cart;