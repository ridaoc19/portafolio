import React, { useContext, useState } from "react";
import CreateContext from "../../../../components/hooks/context/CreateContext";


function BlockTwo(props) {

  const [change, setChange] = useState([])
  
  const { admin: { postAdmin, state }, experience } = useContext(CreateContext)
  const { position } = experience.works.work[1]

  let tecnologies = Array.from(new Set(position.map(e => e.function.map(e => e.tecnologies)).flat(Infinity)))

console.log(experience)
  return (
    <div className="grid_container">
      <div className="grid_container_one">
        <h2>tecnologias</h2>
        {tecnologies?.map(e => {
          return (
            <div key={e}>
              {e}
            </div>
          )
        })}

      </div>
      <div className="grid_container_two">
        <h2>Seleccionadas</h2>
        
      </div>
    </div>
  );
}

export default BlockTwo;
