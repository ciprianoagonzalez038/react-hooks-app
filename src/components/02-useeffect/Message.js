import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({x:0, y:0});
    const { x, y} = coords;

    useEffect(() => {
        console.log('Componente montado')

        const mouseMove = (e) => {
            const coordenadas = {
                x: e.x,
                y: e.y
            };

            setCoords(coordenadas)
        };

        // extraer las coordenadas del mose
        window.addEventListener('mousemove', mouseMove); 

        return () => {
            console.log('Componente Desmontado')
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [])

    return (
        <div>
            <h3>Eres genial!</h3>
            <p>
                x: {x}
                y: {y}
            </p>
        </div>
    )
}
