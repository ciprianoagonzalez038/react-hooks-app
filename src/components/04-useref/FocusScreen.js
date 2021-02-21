import React from 'react'
import '../02-useeffect/effects.css';

export const FocusScreen = () => {
    return (
        <div>
            <h1>Focus Screen</h1>
            <hr/>

            <input
                className="form-control"
                placeholder="Su Nombre"
            />

            <button 
                className="btn btn-primary">
                Focus
            </button>
        </div>
    )
}
