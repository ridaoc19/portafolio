import React from "react";

function Theme() {

  // Nombre de la clase con la que activamos el tema dark
  const darkTheme = 'dark-theme'
  // Tema seleccionado por el usuario anteriormente (si es que lo hizo)
  const selectedTheme = localStorage.getItem('selected-theme')
  // Preguntamos qué tema tiene el usuario en su sistema
  // true = dark
  // false = light
  const userHasDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
  // Obtenemos el tema actual que tiene la interfaz validando la clase dark-theme
  const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'

  // Validamos si el usuario anteriormente elegió un tema
  if (selectedTheme) {
    // Si se cumple la validación, preguntamos cuál fue el tema para saber si activamos o desactivamos el dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  } else {
    // Preguntamos si el usuario tiene tema dark en su sistema
    // En caso de que sí, lo activamos en la interfaz
    if (userHasDarkTheme) document.body.classList.add(darkTheme)
  }

  // Botón para activar el tema
  const handleOnClick = (e) => {
    e.preventDefault()
    // console.log(e)
    // Agregamos o quitamos el tema dark
    document.body.classList.toggle(darkTheme)
    // Guardamos el tema actual que eligió el usuario
    localStorage.setItem('selected-theme', getCurrentTheme())
  }

  return (
    <div>
      <button 
      className="change-theme-button" 
      onClick={handleOnClick}></button>
    </div>
  );
}

export default Theme;
