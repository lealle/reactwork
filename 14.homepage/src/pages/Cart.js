import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { changeName, changeCount } from '../store/store';

function Cart(findId){
    // store 에 있는 모든것 가져오기
    let result = useSelector((result) => result);


    // store 에서 원하는 것만 가져오기 
    let product = useSelector(state => state.product);

    let dispatch = useDispatch();

    return(
        <>
                    <br></br>
            <h1>{result.user1}의 Cart List</h1>
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
            result.product.map((c,i) =>{
                return(

                    <tr key={i}>
                        <td>{c.id}</td>
                        <td>{c.name}</td>
                        <td>{c.count}</td>
                        <td><Button onClick={()=>{
                            dispatch(changeCount(c.id))
                        }}>카운트늘리기</Button></td>
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

/*
store 에 장바구니에 위의 상품을 담았다
store.js에서 넣어주고 
Cart.js테이블에서 보여주기 

[
    {id:1, name:'jacket' , count: 1}
    {id:3, name:'knitt' , count: 2}
]



*/