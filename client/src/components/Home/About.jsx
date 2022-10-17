
import style from './home.module.scss';
// [...new Array(3)]
export default function About(props) {
  return (
    <div>
      <div className={style.about_container}>
        <h1>Ricardo David Ocampo.</h1>
        <h2>Disfruto construyendo cosas para la web.</h2>
        <p>En septiembre de 2022 finalice Bootcamp Full Stack Developer y actualmente estoy 
          perfeccionando el portafolio que estas observando ya que me encuentro en búsqueda 
          laboral.</p>
      </div>
    </div>
  );
}

