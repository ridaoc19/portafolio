import React, { useContext } from 'react';
import CreateContext from '../../../../components/hooks/context/CreateContext';

function Button(props) {
  const { admin: {cleanAdmin} } = useContext(CreateContext)


    const handleOnClick = (e) => {
      e.preventDefault();
        cleanAdmin()
    }
    return (
        <div>
            <button name="clean" onClick={handleOnClick}>limpiar</button>
        </div>
    );
}

export default Button;