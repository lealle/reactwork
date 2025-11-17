import { configureStore, createSlice } from '@reduxjs/toolkit';

/*
  * 변경하기
    reducers : {
        함수명(기존의 값) {
            return 변경값;
        }
    }
*/

let user = createSlice({
    name : "lee",  
    initialState : 3 
})

let user1 = createSlice({
    name : "lee", //  대표하는 이름
    initialState : "tjoeun", // 값 (객체, 배열, 값 ...)
        reducers : {
        changeName(n){ // n-> 대표하는 이름 
            return n+'3차';
        }
    }
})
export let { changeName  } = user1.actions 

// 무엇을 하는건지에 대한 의견 
// 함수를 실행해야하는구나 라고 인식 

let product = createSlice({
    name : "product",
    initialState :    [
        {id:1, name:'jacket' , count: 1},
        {id:3, name:'knitt' , count: 2}
    ] ,
    reducers : {
        changeCount(state, action){ // actiom 변수
            let item = state.find((x)=> x.id == action.payload) // .payload 변수값을 받아서 가져다준다.
            
            if(item){
                item.count++;
            }
        }
    }
})

export let { changeCount   } = product.actions
/*
변경하는 값이 array/object 인 경우 
*/
let user2 = createSlice({
    name : "user22", 
    initialState : {name : "user22", age: 20}, 
    reducers : {
        changeAge(state){  
            state.age += 1;
        },
        changeName1(state){
            state.name += 'a';
        },
        changeNumAge(state, num){ // 사용자로부터 num에 해당하는 값을 받을 수 있음 
            state.age += num.payload; // 
            
        }
    }
})
export let { changeAge, changeName1, changeNumAge  } = user2.actions 



export default configureStore({
    reducer: {
        user : user.reducer,
        user1 : user1.reducer,
        user2 : user2.reducer,
        product : product.reducer
    }
})