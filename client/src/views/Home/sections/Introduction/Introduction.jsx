import React from "react";

function Introduction(props) {
  return (
    <>
      <h1>Hola, mi nombre es</h1>
      <h2>Ricardo David Ocampo</h2>
      <h3>Construyo cosas para la web.</h3>
      <img src="/profile.jpg" alt="" width="80" />
      <a href="/CV.pdf" download="CV_Ricardo_David_Ocampo">Descargar CV</a>
      <p>
      Soy apasionado desarrollando cosas para la web, tengo conocimiento
      en  Frontend y Backend mis habilidades las puede encontrar acá, además
      puede conocer un poco mi vida laboral.
      </p>
    </>
  );
}

export default Introduction;
