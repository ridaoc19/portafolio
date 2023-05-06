import React, { useContext, useEffect, useState } from 'react';
import Validation from '../../../../../components/utils/function/Validation';
import CreateContext from '../../../../../components/hooks/context/CreateContext';
import { DELETE, LOADING_API_TECHNOLOGIES, POST, TECHNOLOGIES } from '../../../../../components/hooks/context/Admin/adminTypes';
import Tooltip from '../../../../../components/Layout/Tooltip/Tooltip';
import { svg } from '../../../../../components/assets/svg';

const initialState = {
  name: "",
  image: "",
  technologies: ""
}

const initialStatus = {
  render: true,
  fields: false,
  add: true
}

function TechPost() {
  const { login: { state: { user } }, admin: { state, status, callApi } } = useContext(CreateContext);

  const [change, setChange] = useState(initialState)
  const [err, setErr] = useState(initialState)
  const [statusLocal, setStatusLocal] = useState(initialStatus)
  const [tooltip, setTooltip] = useState(false)


  useEffect(() => {
    Object.values(err).filter((e) => e).length === 0 && Object.values(change).filter((e) => e).length > 2
      ? document.getElementById("technologies_save")?.removeAttribute("disabled") :
      document.getElementById("technologies_save")?.setAttribute("disabled", "")
  }, [err, change, state])

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    const { type, stop, empty } = Validation(name, value);
    !stop && setChange({ ...change, [name]: empty ? "" : value });
    setErr({ ...err, [name]: type });
  }

  const handleOnClick = (e) => {
    const name = e.target.attributes.getNamedItem("name").value
    const value = e.target.attributes?.getNamedItem("value")?.value
    const id = e.target.attributes?.getNamedItem("id")?.value
    e.preventDefault();
    switch (name) {
      case "add":
        setStatusLocal({ ...statusLocal, add: false, fields: true, render: false })
        document.getElementById("technologies_save")?.setAttribute("disabled", "")
        break;
      case "clean":
        setStatusLocal({ ...statusLocal, add: true, fields: false, render: true })
        break;
      case "edit":
        if (id !== user.user_id) return alert("Solo puede editarlo la persona que lo creo")
        setChange(state.technologies.find(t => t._id === value))
        setStatusLocal({ ...statusLocal, add: false, fields: true, render: false })
        return;
      case "save":
        callApi({ method: POST, route: `${TECHNOLOGIES}/${status.position_function_id}/${user._id}`, loading: LOADING_API_TECHNOLOGIES, post: Object.assign({ user_id: user._id }, change) })
        break;

      case "delete":
        if (id !== user.user_id) return alert("Solo lo puede eliminar la persona que lo creo")
        callApi({ method: DELETE, route: `${TECHNOLOGIES}/${status.position_function_id}/${user._id}`, loading: LOADING_API_TECHNOLOGIES, post: { _id: value } })
        return;
      default: break;
    }
    setChange(initialState)
    setErr(initialState)

  }

  const handleOnLoad = (e) => setErr({ ...err, image: e.target.value })

  // toolpit
  const information = [
    { type: "delete", color: "red", data: "Eleminaría la empresa y toda la información relacionada con ella" },
    { type: "edit", color: "blue", data: "Puede Editar los campos de la Empresa" },
  ]

  useEffect(() => {
    window.matchMedia("(min-width: 1200px)").matches ? setTooltip(false) : setTooltip(true)
  }, [])

  return (
    <>
      {state.loading_api_technologies ? <h3>Cargando...</h3>
        : <div className='technologies-post-container'>
          <div>

            {statusLocal.render &&
              <div className='-render'>
                {tooltip &&
                  <div className='-information'>
                    {information?.map(i =>
                      <i key={i.type} value={i.data} >
                        <Tooltip text={i.data} color={i.color} position="right">
                          {svg({ type: "information", color: i.color, width: 18 })}
                        </Tooltip>
                      </i>)}
                  </div>}


                <ul>
                  {state?.technologies?.map((e) => {
                    return (
                      <li key={e._id}>
                        {!tooltip && <>
                          <Tooltip text={`Eliminar ${e.name}`} color={"red"} position="top">
                            <i id={e.user_id.user_id} name="delete" onClick={handleOnClick} value={e._id}>{svg({ type: "delete", color: "red" })}</i>
                          </Tooltip>
                          <Tooltip text={`Editar ${e.name}`} color={"green"} position="bottom">
                            <i id={e.user_id.user_id} name="edit" onClick={handleOnClick} value={e._id}>{e.name}</i>
                          </Tooltip>
                        </>}

                        {tooltip && <>
                          <i id={e.user_id.user_id} name="delete" onClick={handleOnClick} value={e._id}>{svg({ type: "delete", color: "red" })}</i>
                          <i id={e.user_id.user_id} name="edit" onClick={handleOnClick} value={e._id}>{e.name}</i>
                        </>}
                      </li>
                    );
                  })}

                </ul>
                {statusLocal.add &&
                  <button id="add" name="add" onClick={handleOnClick}>
                    {svg({ type: "add", color: "rgb(5, 207, 5)" })} Agregar nueva Tecnología
                  </button>
                }
              </div>}

            {statusLocal.fields &&
              <div className='-fields'>

                <div className="-name">
                  <label >Nombre</label>
                  <input type="text" onChange={handleOnChange} placeholder="React" name="name" value={change.name} />
                  {err.name && <span className="err">{err.name}</span>}
                </div>

                <div className='-technologies'>
                  <label >Clasificación</label>
                  <select name="technologies" value={change.technologies} onChange={handleOnChange}>
                    <option value="">Seleccionar</option>
                    <optgroup label="Desarrollo">
                      <option value="Front end">Front end</option>
                      <option value="Back end">Back end</option>
                    </optgroup>
                    <optgroup label="Otras profesiones">
                      <option value="Otros">Otros</option>
                    </optgroup>
                  </select>
                  {err.technologies && <span>{err.technologies}</span>}
                </div>

                <div className="-image">
                  <label >Logo</label>
                  <input type="url" onChange={handleOnChange} placeholder="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/250px-React.svg.png" name="image" value={change.image} />
                  <span className="err">{err.image}</span>

                </div>

                {<div className='-render-image'>
                  <img id="function_img" name="function_img" onLoad={(e) => { handleOnLoad(e, "Load") }} src={change.image} alt="" />
                </div>}

                <div className='-button'>
                  <div>
                    <button type="submit" name='clean' onClick={handleOnClick} >limpiar</button>
                    <button id='technologies_save' type="submit" name='save' onClick={handleOnClick}>Guardar</button>
                  </div>
                </div>
              </div>}
          </div>
        </div>}
    </>
  );
}

export default TechPost;