import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
//import { Message } from './Message';
import './effects.css';

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const {name, email, password} = formValues;

    useEffect(() => {
        console.log('El Emial Cambio')
    }, [email]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHook</h1>
            <hr/>

            <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Tu nombre"
                autoComplete="off"
                value={name}
                onChange={handleInputChange}
            />

            <hr/>

            <input
                type="text"
                name="email"
                className="form-control"
                placeholder="Tu EMail"
                autoComplete="off"
                value={email}
                onChange={handleInputChange}
            />

            <hr/>

            <input
                type="password"
                name="password"
                className="form-control"
                placeholder="******"
                autoComplete="off"
                value={password}
                onChange={handleInputChange}
            />

            <hr/>

            <button 
                type="submint" 
                className="btn btn-primary"
                >
                    Guardar
            </button>
        </form>
    )
}
