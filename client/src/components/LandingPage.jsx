import style from '../styles/styles.module.scss';
import images from '../images/images.js';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getIpClient } from '../redux/actions';
import axios from 'axios'

export default function LandingPage(props) {

  useEffect(() => {
    // getIpClient()
    async function ip(){
    const { data } = await axios.get('https://ipgeolocation.abstractapi.com/v1/?api_key=578130a355254e108446d95e45a74c84')
      console.log(data)
    }
    ip()
    
  }, [])
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
          <h3>Un breve resumen sobre mi</h3>
          <p>
            Después de haber Trabajado durante 12 años en la {" "}
            <a href="https://www.policia.gov.co/" target="_blanck">Policía Nacional de Colombia</a>, en la <a href="https://www.policia.gov.co/oficinas-asesoras/telematica" target="_blanck">Oficina de telemática</a>, especialidad encargada de todo el componente Tecnologico de la Institucion,
            logre encontrar algo que me apasiona hacer día a día, gracias eso, usted esta
            el día de hoy observando mi portafolio
          </p>

        </div>

        <div className={style.content} >
          <h4>
            Lo invito a ingresar, podrá encontrar lo siguiente:
          </h4>
          <ul>
            {images.title.map(e => <p key={e.name}><img src={e.image} alt="icono" width={"15px"} />{e.name}</p>)}
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
            {images.backend.map(e => <div key={e.name}> <img src={e.image} alt="back" /></div>)}
          </div>
        </div>

      </div>
    </div>


  );
}

