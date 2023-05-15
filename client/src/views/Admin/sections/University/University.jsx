import React, { useContext, useEffect, useState } from 'react';
import useOpenModal from '../../../../components/Layout/Modal/useOpenModal';
import { DELETE, LOADING_API_UNIVERSITY, POST, UNIVERSITY } from '../../../../components/hooks/context/Admin/adminTypes';
import CreateContext from '../../../../components/hooks/context/CreateContext';
import Validation from '../../../../components/utils/function/Validation';
import useValidation from '../../utils/useValidation';
import Fields from './Fields/Fields';
import Render from './Render/Render';

const initialState = {
  name: "",
  image: "",
  link: "",
}

function University() {
  const { setValidation } = useValidation()
  const { setModal, modal } = useOpenModal();
  const { login: { state: { user } }, admin: { state, status, setStatus, callApi } } = useContext(CreateContext);
  const [change, setChange] = useState(initialState)
  const [err, setErr] = useState(initialState)

  useEffect(() => {
    setValidation({ change, validate: ["name", "image", "link"], element: "university_save", image: "university_img" })
    // eslint-disable-next-line
  }, [err])

  const handleOnClick = (e) => {
    e.preventDefault();
    const name = e.target.attributes.getNamedItem("name").value
    const value = e.target.attributes?.getNamedItem("value")?.value

    const nameInput = name.split("_").length > 2 ? name.split("_").slice(1).toString().replace(',', '_') : name.split("_")[1]
    console.log(nameInput);
    switch (nameInput) {
      case "add":
        setStatus({ university_fields: true, university_add: false, university_title_id: "", university_render: false })
        break
      case "edit":
        setChange(state.university.find(d => d._id === value))
        setStatus({ university_fields: true, title_add_function: false, university_add_title: false, university_add: false, university_title_id: value })
        return
      case "clean":
        setStatus({ university_fields: false, university_add: true, university_title_id: "", university_render: true })
        break
      case "save":
        if (!user?._id) return setModal({ ...modal, avalible: true, animation: "mixInAnimations" })
        setStatus({ university_add: true, university_render: true, university_fields: false, university_title_id: "" });
        callApi({ method: POST, route: UNIVERSITY, loading: LOADING_API_UNIVERSITY, post: Object.assign({ user_id: user._id }, change) })
        break
      case "delete":
        setStatus({ university_add: true, university_render: true, university_fields: false, university_title_id: "" });
        callApi({ method: DELETE, route: `${UNIVERSITY}/${value}`, loading: LOADING_API_UNIVERSITY })
        break
      case "add_title":
        setStatus({ university_add_title: true, university_add: false, university_fields: false, university_title_id: value })
        break
      default: return
    }
    setErr(initialState)
    setChange(initialState)
  }

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    const nameInput = name.split("_").length > 2 ? name.split("_").slice(1).toString().replace(",", "_") : name.split("_")[1];
    const { type, stop, empty } = Validation(nameInput, value, change);
    !stop && setChange({ ...change, [nameInput]: empty ? "" : value });
    setErr({ ...err, [nameInput]: type });
  };

  const handleOnLoad = (_e, s) => {
    setErr({ ...err, image: "" })
    document.getElementById("university_img").parentNode.classList.add("borde_image")
  }

  return (
    <div className="university__container">

      {state.loading_api_university
        ? <h1>Cargando...</h1>
        : <div>
          <div className="university__render">
            {status.university_render && <Render handleOnClick={handleOnClick} university={state.university} status={status} />}
          </div>
          {status.university_fields && <div className="university__fields">
            <Fields handleOnChange={handleOnChange} handleOnLoad={handleOnLoad} handleOnClick={handleOnClick} change={change} err={err} />
          </div>}
        </div>}
    </div>
  );
}

export default University;