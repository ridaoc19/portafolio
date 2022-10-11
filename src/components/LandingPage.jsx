import style from '../styles/styles.module.scss';
import images from '../images/images.js';
import { Link } from 'react-router-dom';

export default function LandingPage(props) {
  let clase = `style.hola`
  return (
    <div>
      <div className={style.landing_container} >
        <div className={style.header} >
          <div>
            <img src={images.logo.image} alt="perfil" />
          </div>
          <h1> Bienvenido al Portafolio de Ricardo</h1>
        </div>

        <div className={style.main} >
          <h2>Un breve resumen sobre mi</h2>
          <p>
            Después de haber Trabajado durante 12 años en la {" "}
            <a href="https://www.policia.gov.co/" target="_blanck">Policía Nacional de Colombia</a>, en la <a href="https://www.policia.gov.co/oficinas-asesoras/telematica" target="_blanck">Oficina de telemática</a>, especialidad encargada de todo el componente Tecnologico de la Institucion,
            logre encontrar algo que me apasiona hacer día a día, gracias eso, usted esta
            el día de hoy observando mi portafolio
          </p>

        </div>

        <div className={style.content} >
          <p>
            Lo invito a ingresar, podrá encontrar lo siguiente:
          </p>
          <ul>
            {images.title.map(e => <h4 className={clase} key={e.name}><img src={e.image} alt="icono" width={"15px"} />{e.name}</h4>)}
          </ul>
        </div>

        <div className={style.income} >
          <p>
            En el momento me encuentro actualizando el portafolio podrá ingresar al  <a href="https://portfolio-nine-beta-87.vercel.app/" target="_blanck"> portafolio anterior </a> ó si desea ingresar a los avances del que está  <Link to={"/about"}> en construcción</Link>
          </p>
        </div>

        <div className={style.tecnologies}>
          <div className={style.tecnologies_frontend}>
         
            {images.frontend.map(e => <div key={e.name}> <img src={e.image} alt="im" /></div>)}
          </div>
          <div className={style.tecnologies_backend}>
            {images.backend.map(e => <div key={e.name}> <img src={e.image} alt="im" /></div>)}
          </div>
        </div>

      </div>
    </div>


  );
}

