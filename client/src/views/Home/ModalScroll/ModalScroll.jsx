import React from "react";

function ModalScroll(props) {
  return (
    <>
      <h2>Que puedes hacer en mi pagina</h2>

      <h3>Contenido de la pagina</h3>
      <p>Puedes ver mi historia laboral y educativa</p>
      <hr />

      <h3>Contenido de la pagina</h3>
      <p>Todo lo que encuentra de la siguiente forma son botones o link para redirigirte a ver mas información</p>
      <ul>
        <li><button>botones</button></li>
        <li> <a href="/#">@redirección</a></li>
      </ul>
      <hr />

      <h3>Registrar información</h3>
      <p>
        Puedes iniciar sesión con Google en <a href="/#">Login</a> e ir <a href="/#">Admin</a> y registrar información de
        prueba, los campos tienen validaciones, cuando vuelvas al <a href="/#">Home</a>, en la
        parte superior derecha, encuentras un <select><option value="">Ejemplo</option></select>, ahi cambia de
        {" "}<select><option value=""> Ricardo Dav... </option></select> a la sección creada por usted, la información que almacene,
        yo la iré depurando con el tiempo, gracias por tomarse el tiempo de visitar mi Portafolio
      </p>
    </>
  );
}

export default ModalScroll;
