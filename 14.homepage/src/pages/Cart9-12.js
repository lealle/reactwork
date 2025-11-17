import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { changeAge, changeCount, changeName1, changeNumAge } from '../store/store';

/*
    * 값 변경하기
    1. store에서 변경함수 만들기
    2. 변경함수 내보내기
    3. 만든함수 import하여 사용하기 
       (useDispatch() 함수 : store.js로 요청을 보내주는 함수)
*/


function Cart(){
    // store 에 있는 모든것 가져오기
    let result = useSelector(result => result);


    // store 에서 원하는 것만 가져오기 
    let product = useSelector(state => state.product);

    // 값 변경하기
    // 1. store에서 변경함수 만들기
    // 2. 변경함수 내보기
    // 3. 만든함수 import하여 사용하기(useDispatch() 함수 : 를 이용하여 호출 )


    let dispatch = useDispatch();

    return(
        <>
            <br></br>
            <h1>{result.user2.name}의 Cart List {result.user2.age} </h1>
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
        <tr>
            <td>
                <Button onClick={()=>{
                    dispatch(changeAge())
                }}>나이바꾸기</Button> 
                </td>
               <td>
                <Button onClick={()=>{
                    dispatch(changeName1())
                }}>이름바꾸기</Button> 
                </td>
                <td>
                <Button onClick={()=>{
                    dispatch(changeNumAge(5))
                }}>나이바꾸기(파라미터)</Button> 
                </td>
        </tr>

        {
            result.product.map((c,i) =>{
                return(

                    <tr key={i}>
                        <td>{c.id}</td>
                        <td>{c.name}</td>
                        <td>{c.count}</td>
                        <td><Button onClick={()=>{
                            dispatch(changeCount(c.id))
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

/*
store 에 장바구니에 위의 상품을 담았다
store.js에서 넣어주고 
Cart.js테이블에서 보여주기 

[
    {id:1, name:'jacket' , count: 1}
    {id:3, name:'knitt' , count: 2}
]



*/