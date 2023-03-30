import React from 'react';

function Button({handleOnClick}) {
    
    return (
        <div>
            <button id='admin-button-clean' name="clean" onClick={handleOnClick}>limpiar</button>
        </div>
    );
}

export default Button;