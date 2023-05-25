import { svg } from "../../assets/svg";

const tech = [
  {
    name: "HTML",
    value: 70,
  },
  {
    name: "CSS",
    value: 70,
  },
  {
    name: "JavaScript",
    value: 85,
  },
  {
    name: "VTEX",
    value: 40,
  },
  {
    name: "TypeScript",
    value: 10,
  },
  {
    name: "React",
    value: 80,
  },
  {
    name: "jQuery",
    value: 10,
  },
  {
    name: "PostgreSQL",
    value: 60,
  },
  {
    name: "Node.js",
    value: 70,
  },
  {
    name: "Redux",
    value: 85,
  },
  {
    name: "React Router",
    value: 60,
  },
  {
    name: "Sequelize",
    value: 60,
  },
  {
    name: "Estudiante",
    value: 100,
  },
  {
    name: "Patrullero",
    value: 100,
  },
  {
    name: "MongoDB",
    value: 60,
  },
  {
    name: "Mongoose",
    value: 70,
  },
  {
    name: "Moment.js",
    value: 10,
  },
  {
    name: "Sass",
    value: 70,
  },
  {
    name: "Express.js",
    value: 80,
  },
  {
    name: "VBA",
    value: 60,
  },
];

export function techValue(name) {
  let response = tech?.find((e) => e.name === name);

  return response.value;
}

export const contact = [
  {
    name: "linkedin",
    user: "ridaoc19",
    url: "https://www.linkedin.com/in/ridaoc19/",
    image: svg({ type: "linkedin", color: "red" }),
  },
  {
    name: "github",
    user: "ridaoc19",
    url: "https://www.github.com/ridaoc19",
    image: svg({ type: "github", color: "black" }),
  },
  {
    name: "email",
    user: "ridaoc19@gmail.com",
    url: "ridaoc19@gmail.com",
    image: svg({ type: "email", color: "red" }),
  },
  {
    name: "address",
    user: "Tarragona - España",
    url: "https://www.google.com/maps/place/Tarragona/@41.1258621,1.1973836,13z/data=!3m1!4b1!4m6!3m5!1s0x12a3fcdbd3ddf159:0x920569a71387a3b2!8m2!3d41.1188827!4d1.2444909!16zL20vMGc3eWQ?entry=ttu",
    image: svg({ type: "address", color: "red" }),
  },
  {
    name: "phone",
    user: "+34604167138",
    url: "tel:+34604167138",
    image: svg({ type: "phone", color: "red" }),
  },
  {
    name: "whatsapp",
    user: "+34604167138",
    url: "https://wa.me/+34604167138",
    image: svg({ type: "whatsapp", color: "red" }),
  },
];
