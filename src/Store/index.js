import { createStore } from "redux";
import { createSlice,configureStore } from "@reduxjs/toolkit";





const initialState = {counter:0,showcounter:true}

const CounterSlicer = createSlice({
    name:"counter",
    initialState,
    reducers: {
        INCREMENT(state){
          state.counter++;
        },
        DECREMENT(state){
                 state.counter--;
        },
        increase(state,action) {
          state.counter = state.counter+action.payload;
        },
        show(state) {
           state.showcounter = !state.showcounter;
        }
    }
})




// const CounterReducer = (state = initialState ,action) => {

//     if(action.type === 'INCREMENT') {
//         return {
//            counter: state.counter+1 ,
//            showcounter:state.showcounter
//         }
//     }

//     if(action.type === 'DECREMENT') {
//         return {
//            counter: state.counter-1 ,
//            showcounter:state.showcounter
//         }
//     }

//     if(action.type === 'increase') {
//         return{
//             counter : state.counter+action.amount ,
//             showcounter:state.showcounter
//         }
//     }

//     if(action.type === 'show') {
//         return{
//             showcounter : !state.showcounter ,
//             counter : state.counter
//         }
//     }

//     return state;
// }




//const store = createStore(CounterReducer);

const store = configureStore({
    reducer:CounterSlicer.reducer
})

export const actions = CounterSlicer.actions;
export default store;