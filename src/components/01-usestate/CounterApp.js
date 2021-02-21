import React, { useState } from 'react'
import './counter.css'

export const CounterApp = () => {
    const [contadores, setContadores] = useState({
        counter1: 10,
        counter2: 20,
        coutner3: 40,
        counter4: 50
    })

    const{counter1, counter2} = contadores;
    return (
        <>
            {/* <h1>Counter {counter}</h1> */}
            <h1>Counter 1: {counter1}</h1>
            <h1>Counter 2: {counter2}</h1>
            <hr/>

            <button className="btn btn-primary"
                    onClick= { () => {
                        setContadores({
                            ...contadores,
                            counter1 : counter1+1
                        });
                        }
                    }
            >
                +1
            </button>
        </>
    )
}
