import React from 'react';

const HolaMundo = () => {
    const Hello = 'Hola Mundo!';
    const isTrue = false;
    return(
        <div className="holamundo">
            <h1>{Hello}</h1>
            <h2>Curso esencial de React</h2>
            <img src="../github.png" alt=""/>
            if ({isTrue}) {
                <h4>Esto es verdadero</h4>
            } else {
                <h5>Esto es falso</h5>
            }
        </div>
    );
};

export default HolaMundo;
