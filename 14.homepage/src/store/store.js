import { configureStore, createSlice } from '@reduxjs/toolkit';

let user = createSlice({
    name : "lee",
    initialState : 3
})
let user1 = createSlice({
    name : "lee",
    initialState : "tjoeun",
        reducers : {
        changeName(n){
            return n+'3차';
        }
    }
})

let product = createSlice({
    name : "product",
    initialState :    [
        {id:1, name:'jacket' , count: 1},
        {id:3, name:'knitt' , count: 2}
    ] ,
        reducers : {
        changeCount(state, action){
            let item = state.find((x)=> x.id == action.payload)

            if(item){
                item.count++;
            }
        }
    }
})

export let { changeName  } = user1.actions
export let { changeCount   } = product.actions


export default configureStore({
    reducer: {
        user : user.reducer,
        user1 : user1.reducer,
        product : product.reducer
    }
})