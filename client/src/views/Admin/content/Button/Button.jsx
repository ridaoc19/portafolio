import React from 'react';

function Button({handleOnClick}) {

    
    return (
        <div className='admin__button-container'>
            <button id='admin-button-clean' name="clean" onClick={handleOnClick}>limpiar</button>
            <button id='admin-button-update' name="update" onClick={handleOnClick}>Guardar</button>
        </div>
    );
}

export default Button;