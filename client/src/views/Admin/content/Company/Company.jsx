import React, { useEffect, useState } from 'react';
import Fields from './sections/Fields/Fields';
import Render from './sections/Render/Render';
import Button from './sections/Buutton/Button';
import Position from '../Position/Position';

const initialState = {
  company: "",
  image: "",
  description: "",
  link: "",
  start_date: "",
  end_date: "",
  position: []
};


function Company({ change, setChange, getWorkAdmin }) {
  const [local, setLocal] = useState(initialState);
  const [idPosition, setIdPosition] = useState(0);
  const [status, setStatus] = useState({ li: true, change: false })

  
  const handleOnChangeLocal = (e) => {
    let modify = [...change]
    const { name, value } = e.target
    modify[idPosition][name] = value
    setChange(modify)
    setLocal({ ...local, [name]: value })
  };


  const handleOnClickLocal = (e) => {

    if (e.target.id === "clean") {
      setLocal({ ...local, image: "", description: "", link: "", start_date: "", end_date: "", })
      setStatus({ ...status, li: false, change: true })
      return
    }

    if (e.target.id === "add") {
      const object = Object.assign(initialState, { _id: "1d" })
      setLocal(object)
      setChange([...change, object])
      setStatus({ ...status, li: false, change: true })
    } else if (e.target.id === "edit") {
      setLocal(change.find(d => d._id === e.target.value))
      setStatus({ ...status, li: false, change: true })
    } else if (e.target.id === "undo") {
      getWorkAdmin()
      setStatus({ ...status, li: true, change: false })
    } else if (e.target.id === "delete") {
      if (change.findIndex(i => i._id === "1d") > 0) {
        setStatus({ ...status, li: false, change: false })
      } else {
        setStatus({ ...status, li: true, change: false })
      }
      setChange(change.filter(d => d._id !== e.target.value))
    }
    setIdPosition(e.target.id === "add" ? change.length : change.findIndex(i => i._id === e.target.value))
  };

  return (
    <div className="company__container">
      <div className="company__title">
        <h2>empresa</h2>
      </div>
      <div className="company__render">
        <Render handleOnClickLocal={handleOnClickLocal} status={status} change={change} />
      </div>
      <div className="admin__company">
        {status.change && <Fields handleOnChangeLocal={handleOnChangeLocal} local={local} idPosition={idPosition} />}
      </div>
      <div className="company__button">
      <Button handleOnClickLocal={handleOnClickLocal} status={status}/>
      </div>
      <hr />
      <div className="admin_container-position">
        <Position />
        {/* <hr /> */}
      </div>
    </div>
  );
}

export default Company;