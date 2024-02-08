import React from "react";
import {useSelector,useDispatch} from "react-redux"
import './App.css'
import { actions } from "./Store";
const Counter = () => {

const counter = useSelector(state => state.counter)
const show  = useSelector(state => state.showcounter)
const dispatch = useDispatch();
const increment = () => {
// dispatch({type:'INCREMENT'})
dispatch(actions.INCREMENT())
}

const decrement = () => {
    // dispatch({type:'DECREMENT'})
    dispatch(actions.DECREMENT())
    }

const increase = () =>{
    // dispatch({type:'increase' , amount:5})
    dispatch(actions.increase(5))
}

const shows = () => {
    // dispatch({type:'show'})
    dispatch(actions.show())
}

    return(
        <div className="outer">
            <div className="inner">
           <h1>Counter  </h1>
        { show && <h2>{counter}</h2> }   
           <div className="buttons">
           
                <button onClick={increment}>increment</button>
                <button onClick={increase}>increment by 5</button>
                <button onClick={decrement}>decrement</button>
                <button onClick={shows}>toggle counter</button>
           </div>
          
           </div>
        </div>
    )
}

export default Counter;