import React from 'react';

function Fields({local ,handleOnChangeLocal}) {
  return (
    <>
        <div className="-company">
          <input
            type="text"
            onChange={handleOnChangeLocal}
            placeholder="empresa"
            name="company"
            value={local.company}
          />
        </div>
        <div className="-image">
          <input
            type="url"
            onChange={handleOnChangeLocal}
            placeholder="logo"
            name="image"
            value={local.image}
          />
        </div>
        <div className="-description">
          <input
            type="text"
            onChange={handleOnChangeLocal}
            placeholder="descripcion empresa"
            name="description"
            value={local.description}
          />
        </div>
        <div className="-web">
          <input
            type="url"
            onChange={handleOnChangeLocal}
            placeholder="sitio web"
            name="link"
            value={local.link}
          />
        </div>
        <div className="-start-date">
          <label htmlFor="start_date">fecha inicio </label>
          <input
            type="date"
            onChange={handleOnChangeLocal}
            id="start_date"
            name="start_date"
            value={local.start_date}
          />
        </div>
        <div className="-end-date">
          <label htmlFor="end_date">Fecha Termino </label>
          <input
            type="date"
            onChange={handleOnChangeLocal}
            id="end_date"
            name="end_date"
            value={local.end_date}
          />
        </div>
    </>
  );
}

export default Fields;