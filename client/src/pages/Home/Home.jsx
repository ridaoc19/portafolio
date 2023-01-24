import React from "react";
import home from "../../components/json/home";
import { Link } from "react-router-dom";
import tecnologies from "../../components/json/tecnologies";
// import Header from '../../components/Layout/Header/Header';
// import images from '../../assets/images/images';
// import Footer from '../../components/Layout/Footer/Footer';
// import Header from '../../components/Layout/Header/Header';

const Home = () => {
  return (
    <div className="home_container">
      <div className="home_title-welcome">
        <h1>Bienvenidos a mi Portafolio</h1>
        <p>
          En el, no solo vas a encontrar mis proyectos, tambien encontraras un
          resumen de quien soy
        </p>
      </div>
      <div className="home_content-summary">
        <h2>Un breve resumen sobre mi</h2>
        <p>
          Después de haber Trabajado durante 12 años en la{" "}
          <a href="https://www.policia.gov.co/" target="_blanck">
            Policía Nacional de Colombia
          </a>
          , en la{" "}
          <a
            href="https://www.policia.gov.co/oficinas-asesoras/telematica"
            target="_blanck"
          >
            Oficina de telemática
          </a>
          , especialidad encargada de todo el componente Tecnologico de la
          Institucion, logre encontrar algo que me apasiona hacer día a día,
          gracias eso, usted esta el día de hoy observando mi portafolio
        </p>
      </div>
      <div>
        <h3>
          Lo invito a seguir observando mi portafolio, podrá encontrar lo
          siguiente
        </h3>
        <ul>
          {home.title.map((e) => (
            <li key={e.name}>{e.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <p>
          En el momento me encuentro actualizando el portafolio podrá ingresar
          al{" "}
          <a href="https://portfolio-nine-beta-87.vercel.app/" target="_blanck">
            {" "}
            portafolio anterior{" "}
          </a>{" "}
          ó si desea, puede ingresar a los avances del que está{" "}
          <Link to={"/about"}> en construcción</Link>
        </p>
      </div>
      <div className="home__content--skill">
        <h3>Habilidades</h3>
        <h4>Frondtend</h4>

        <ul className="home__skill--container">
          {tecnologies.frontend.map((e) => (
            <div key={e.name} className="home__skill--card">
              <div className="skill__card--father">
                <div className="skill__card--son">
                  <img src={e.image} alt="img" />
                  <h5>{e.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </ul>

        <h4>Backend</h4>

        <ul className="home__skill--container">
          {tecnologies.backend.map((e) => (
            <div key={e.name} className="home__skill--card">
              <div className="skill__card--father">
                <div className="skill__card--son">
                  <img src={e.image} alt="img" />
                  <h5>{e.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
