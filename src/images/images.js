import linkedin from './linkedin.png';
import github from './github.png';
import email from './email.png';
import perfil from './perfil.png';
import about from './icons/empresario.png'
import experience from './icons/cohete.png'
import project from './icons/crecimaleta.png'
import studies from './icons/graduacion.png'
import condecorations from './icons/medalla.png'
import logo from './logo.png'



export default {
  contact: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/ridaoc19/",
      image: linkedin
    },
    {
      name: "github",
      url: "https://www.github.com/ridaoc19",
      image: github
    },
    {
      name: "email",
      url: "ridaoc19@gmail.com",
      image: email
    },
  ],

  profile: {
    image: perfil
  },

  logo: {
    image: logo
  },

  title: [
    {name:"Mas sobre mi", image: about},
    {name:"experiencia", image: experience},
    {name:"proyectos", image:project},
    {name:"Educación", image:studies},
    {name:"condecoraciones", image:condecorations},
  ], 
}


