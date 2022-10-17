import style from "./layout.module.scss";

export default function Footer(props) {
  return (
    <div>
      <div className={style.footer_container} >
        <h5>Creado por Ricardo David Ocampo</h5>
        <h6>Medellin - Antioquia - Colombia</h6>
      </div>
    </div>
  );
}
