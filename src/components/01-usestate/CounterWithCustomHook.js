import React, { useContext } from 'react'
import { useCounter } from '../../hooks/useCounter'
import './counter.css'


export const CounterWithCustomHook = () => {
    let initialValue = 100;
    const {state, increment, decrement, reset} = useCounter(initialValue);
    return (
        <>
            <h1>Counter with Hook {state}</h1>
            <hr/>
            <button className="btn btn-primary" onClick={ () => increment()}>
                +1
            </button>
            <button className="btn btn-primary" onClick={ () => decrement(2)}>
                -1
            </button>
            <button className="btn btn-primary" onClick={ () => reset(initialValue)}>
                Reset
            </button>
        </>
    )
}
