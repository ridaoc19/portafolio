import React, { useContext, useEffect, useState } from 'react';
import Validation from '../../../../../components/utils/function/Validation';
import CreateContext from '../../../../../components/hooks/context/CreateContext';
import { DELETE, LOADING_API_TECHNOLOGIES, POST, TECHNOLOGIES } from '../../../../../components/hooks/context/Admin/adminTypes';

const initialState = {
  name: "",
  image: "",
  technologies: ""
}

const initialStatus = {
  render: false,
  add: true
}

function TechPost(props) {
  const { login: { state: { user } }, admin: { state, status, setStatus, callApi } } = useContext(CreateContext);

  const [change, setChange] = useState(initialState)
  const [err, setErr] = useState(initialState)
  const [statusLocal, setStatusLocal] = useState(initialStatus)

  useEffect(() => {
    Object.values(err).filter((e) => e).length === 0 && Object.values(change).filter((e) => e).length > 2
      ? document.getElementById("technologies_save")?.removeAttribute("disabled") :
      document.getElementById("technologies_save")?.setAttribute("disabled", "")
  }, [err, change])

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    const { type, stop, empty } = Validation(name, value);
    !stop && setChange({ ...change, [name]: empty ? "" : value });
    setErr({ ...err, [name]: type });
  }

  const handleOnClick = (e) => {
    const { name, value } = e.target;
    e.preventDefault();
    switch (name) {
      case "add":
        setStatusLocal({ ...statusLocal, add: false, render: true })
        document.getElementById("technologies_save")?.setAttribute("disabled", "")
        break;
      case "clean":
        setStatusLocal({ ...statusLocal, add: true, render: false })
        break;
      case "edit":
        // console.log(state.technologies.find(t => t._id === value));
        setChange(state.technologies.find(t => t._id === value))
        setStatusLocal({ ...statusLocal, add: false, render: true })
        return;
      case "save":
        callApi({ method: POST, route: `${TECHNOLOGIES}/${status.position_function_id}/${user._id}`, loading: LOADING_API_TECHNOLOGIES, post: Object.assign({ user_id: user._id }, change) })
        break;

      case "delete":
        callApi({ method: DELETE, route: `${TECHNOLOGIES}/${status.position_function_id}/${user._id}`, loading: LOADING_API_TECHNOLOGIES, post: { _id: value } })
        return;
      default: break;
    }
    setChange(initialState)
    setErr(initialState)

  }

  const handleOnLoad = (e) => {

    setErr({ ...err, image: e.target.value })
  }

  return (
    <>
      {state.loading_api_technologies ? <h3>Cargando...</h3> : <div>
        <div>
          <ul>
            {state?.technologies?.map((e) => {
              return (
                <li key={e._id}>
                  {e.name}
                  <button id="edit" name="edit" onClick={handleOnClick} value={e._id}>
                    editar
                  </button>
                  <button id="delete" name="delete" onClick={handleOnClick} value={e._id}>
                    eliminar
                  </button>
                </li>
              );
            })}

            {statusLocal.add && <li>
              <button id="add" name="add" onClick={handleOnClick}>
                Agregar nueva Tecnología
              </button>
            </li>}

          </ul>
        </div>

        {statusLocal.render && <div>

          <div className="-name">
            <input type="text" onChange={handleOnChange} placeholder="Tecnología" name="name" value={change.name} />
            <span>{err.name}</span>
          </div>

          <div className="-image">
            <input type="url" onChange={handleOnChange} placeholder="logo" name="image" value={change.image} />
            <span>{err.image}</span>
            <img id="img_temp" name="img" onLoad={(e) => { handleOnLoad(e) }} src={change.image} alt="" width="50" />
          </div>

          <div>
            <select name="technologies" onChange={handleOnChange}>
              <option value="">Seleccionar</option>
              <option value="Front end">Front end</option>
              <option value="Back end">Back end</option>
            </select>
            <span>{err.technologies}</span>
          </div>

          <div>
            <button type="submit" name='clean' onClick={handleOnClick} >limpiar</button>
            <button id='technologies_save' type="submit" name='save' onClick={handleOnClick}>Guardar</button>
          </div>
        </div>}
      </div>}
    </>
  );
}

export default TechPost;