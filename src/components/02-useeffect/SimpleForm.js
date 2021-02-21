import React, { useEffect, useState } from 'react';
import { Message } from './Message';
import './effects.css';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const {name, email} = formState;

    useEffect( () => {
        console.log('Hey!');
    }, []); // el [] es para que solo se dispeare al cargar el form

    useEffect( () => {
        console.log('FormState cambio!');
    }, [formState]); // el [] es para que solo se dispare cuando cambie algo en el formstate

    useEffect( () => {
        console.log('EMail Cambio!');
    }, [email]); // el [] es para que solo se dispare cuando cambie el email

    

    const handleInputChange = ( { target} ) => {
        setFormState({
            ...formState,
            [ target.name ]: target.value
        });
    }

    return (
        <>
            <h1>useEffect</h1>
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

            { (name === '123') && <Message />} {/* Esto es como una condicion ternaria  pero solo con SI */}
        </>
    )
}
