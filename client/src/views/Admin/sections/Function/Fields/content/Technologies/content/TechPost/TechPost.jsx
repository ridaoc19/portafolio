import React, { useContext, useEffect, useState } from 'react';
import useOpenModal from '../../../../../../../../../components/Layout/Modal/useOpenModal';
import { DELETE, LOADING_API_TECHNOLOGIES, POST, TECHNOLOGIES } from '../../../../../../../../../components/hooks/context/Admin/adminTypes';
import CreateContext from '../../../../../../../../../components/hooks/context/CreateContext';
import Validation from '../../../../../../../../../components/utils/function/Validation';
import useValidation from '../../../../../../../utils/useValidation';
import Fields from './content/Fields/Fields';
import Render from './content/Render/Render';


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
  const { setModal, modal } = useOpenModal();
  const { setValidation } = useValidation()
  const { login: { state: { user } }, admin: { state, status, callApi } } = useContext(CreateContext);

  const [change, setChange] = useState(initialState)
  const [err, setErr] = useState(initialState)
  const [statusLocal, setStatusLocal] = useState(initialStatus)
  const [tooltip, setTooltip] = useState(false)
  const [dataModal, setDataModal] = useState({ header: "", children: "" })


  useEffect(() => {
    setValidation({ change, validate: ["name", "image", "technologies"], element: "technologies_save", image: "technologies_img" })
  }, [err, change, statusLocal])

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
    const text = e.target?.dataset?.text;

    e.preventDefault();
    switch (name) {
      case "add":
        setStatusLocal({ ...statusLocal, add: false, fields: true, render: false })
        break;
      case "clean":
        setStatusLocal({ ...statusLocal, add: true, fields: false, render: true })
        break;
      case "edit":
        if (id !== user.user_id) {
          setDataModal({ header: "Validación", children: `A "${text}" solo lo puede editar la persona que lo creo` })
          setModal({ ...modal, avalible: true, animation: "mixInAnimations" })
          return
        }
        setChange(state.technologies.find(t => t._id === value))
        setStatusLocal({ ...statusLocal, add: false, fields: true, render: false })
        return;
      case "save":
        callApi({ method: POST, route: `${TECHNOLOGIES}/${status.position_function_id}/${user._id}`, loading: LOADING_API_TECHNOLOGIES, post: Object.assign({ user_id: user._id }, change) })
        break;

      case "delete":
        if (id !== user.user_id) {
          setDataModal({ header: "Validación", children: `A "${text}" solo puede eliminarlo la persona que lo creo` })
          setModal({ ...modal, avalible: true, animation: "mixInAnimations" })
          return;
        }
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
                <Render information={information} state={state} statusLocal={statusLocal} tooltip={tooltip} handleOnClick={handleOnClick} dataModal={dataModal} />
              </div>}

            {statusLocal.fields &&
              <div className='-fields'>
                <Fields change={change} err={err} handleOnChange={handleOnChange} handleOnClick={handleOnClick} handleOnLoad={handleOnLoad} />
              </div>}
          </div>
        </div>}
    </>
  );
}

export default TechPost;