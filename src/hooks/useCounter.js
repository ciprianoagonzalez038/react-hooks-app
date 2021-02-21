import { useState } from "react"

export const useCounter = (initialcounter = 10) => {
    const [counter, setcounter] = useState(initialcounter);

    const increment = (factor =1) => {
        setcounter(counter + factor);
    }

    const decrement = (factor =1) => {
        setcounter(counter - factor);
    }

    const reset = () => {
        setcounter(initialcounter);
    }

    return {
        counter,
        increment,
        decrement,
        reset
    };
}
