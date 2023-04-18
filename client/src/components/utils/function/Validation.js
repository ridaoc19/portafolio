import moment from 'moment';
import 'moment-precise-range-plugin';
import { formatDate } from './date';

export default function Validation(name, value, change) {

  let error = ""

  if (name === "name") {
    if (value !== "") {
      if (value.trim() == "") return error = { type: "Debe ingresar texto", stop: true }
      if (value.length < 5) {
        return error = { type: "Debe tener mas de 5 caracteres", stop: false }
      } else if (value.length >= 45) {
        return error = { type: "Solo debe tener hasta 45 caracteres", stop: true }
      }
    } else return error = { type: "Este campo es obligatorio", stop: false }
  }

  if (name === "image") {
    if (value !== "") {
      if (value.trim() == "") return error = { type: "Debe ingresar texto", stop: true }
      return error = { type: "Ingrese una URL valida HTTPS", stop: false }
    } else return error = { type: "Este campo es obligatorio", stop: false }
  }

  if (name === "link") {
    if (value !== "") {
      if (value.trim() == "") return error = { type: "Debe ingresar texto", stop: true }
      if (!/^https?:\/\/?.*$/.test(value) || value.toString().length < 14) return error = { type: "Ingrese una URL valida HTTPS", stop: false }
    } else return error = { type: "Este campo es obligatorio", stop: false }
  }

  if (name === "repository") {
    if (value !== "") {
      if (value.trim() == "") return error = { type: "Debe ingresar texto", stop: true }
      if (!/^https?:\/\/?.*$/.test(value) || value.toString().length < 14) return error = { type: "Ingrese una URL valida HTTPS", stop: false }
    } else return error = { type: "Este campo es obligatorio", stop: false }
  }

  if (name === "start_date" || name === "end_date") {
    if (value !== "") {
      if (value.trim() == "") return error = { type: "Debe ingresar texto", stop: true }
      let year = new Date(value).getFullYear()
      if (year < 2000 || year > 2035) return error = { type: "Ingrese un año valido", stop: false }
      if (name === "end_date") {
        if (change.start_date) {
          if (moment(change.start_date).diff(moment(value)) > 0) return error = { type: `${formatDate(value).date} fecha menor a  ${formatDate(change.start_date).date}`, stop: false, empty: true }
        } else return error = { type: "Fecha inicio es obligatoria", stop: false, empty: true }
      }
      if (name === "start_date" && change.end_date) {
        if (moment(value).diff(moment(change.end_date)) > 0) return error = { type: `${formatDate(value).date} fecha superior a fecha final ${formatDate(change.end_date).date}`, stop: false, empty: true }
      }
    }
  }

  if (name === "description") {
    if (value !== "") {
      if (value.trim() == "") return error = { type: "Debe ingresar texto", stop: true }
      if (value.length < 5) {
        return error = { type: "Debe tener mas de 5 caracteres", stop: false }
      } else if (value.length >= 300) {
        return error = { type: "Solo debe tener hasta 300 caracteres", stop: true }
      }
    } else return error = { type: "Este campo es obligatorio", stop: false }
  }

  if (name === "tasks") {
    if (value !== "") {
      if (value.trim() == "") return error = { type: "Debe ingresar texto", stop: true }
      if (value.length < 5) {
        return error = { type: "Debe tener mas de 5 caracteres", stop: false }
      } else if (value.length >= 100) {
        return error = { type: "Solo debe tener hasta 100 caracteres", stop: true }
      }
    } else {
      if (change.length > 0) {
        return error = { type: "", stop: false }
      } else return error = { type: "Este campo es obligatorio", stop: false }
    }
  }




  // // ^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$
  // ///// CORREO ELECTRONICO
  // if (name === "email") {
  //   if (!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(value)) {

  //     return error = { type: "email", email: "Verificar correo", status: "error" }
  //   } else {
  //     return error = { type: "email", email: "Correo", status: "ok" }
  //   }
  // }
  // //// PASSWORD
  // if (name === "password") {
  //   if (/^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(value)) {
  //     return error = { type: "password", password: "verificar contraseña", status: "error" }
  //   } else {
  //     return error = { type: "password", password: "Contraseña", status: "ok" }
  //   }
  // }

  // //// NEWPASWORD
  // if (name === "newPassword") {
  //    //   if (/^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(value)) {
  //     return error = { type: "newPassword", password: "verificar contraseña", status: "error" }
  //   } else {
  //     return error = { type: "newPassword", password: "Repite contraseña", status: "ok" }
  //   }
  // }


  // ///// NOMBRRES Y APELLIDOS
  // if (name === "nombresApellidos") {
  //   if (/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/.test(value)) {
  //     return error = { type: "lastName", lastName: "verificar Nombre", status: "error" }
  //   } else {
  //     return error = { type: "lastName", lastName: "Nombres", status: "ok" }
  //   }
  // }

  // ///// PRECIO Esta expresión regular valida el precio con 2 decimales
  // if (name === "amount") {
  //   if (value.toString().length >= 5) return error = { type: "amount", amount: "Longitud maxima 5 caracteres", status: "error" }
  //   if (Number(value) || value === "") {
  //     return error = { type: "amount", amount: "Monto", status: "ok" }
  //   } else {
  //     return error = { type: "amount", amount: "Debe ser numero entero", status: "error" }
  //   }
  // }

  // ///// ASUNTOS MENSAJES
  // if (name === "subject") {
  //   if (value === "") {
  //     return error = { type: "subject", subject: "Asunto", status: "ok" }
  //   } else if (value.length >= 30) {
  //     return error = { type: "subject", subject: "Solo debe tener hasta 30 caracteres", status: "stop" }
  //   } if (value.length < 5) {
  //     return error = { type: "subject", subject: "Debe tener mas de 5 caracteres", status: "error" }
  //   } else {
  //     return error = { type: "subject", subject: "Asunto", status: "ok" }
  //   }
  // }

  // ///// DETALLE DE PAGOS
  // if (name === "detail") {

  //   if (value === "") {
  //     return error = { type: "detail", detail: "Detalles", status: "ok" }
  //   } else if (value.length >= 230) {
  //     return error = { type: "detail", detail: "Solo debe tener hasta 80 caracteres", status: "stop" }
  //   } if (value.length <= 5) {
  //     return error = { type: "detail", detail: "Debe tener mas de 5 caracteres", status: "error" }
  //   } else {
  //     return error = { type: "detail", detail: "Asunto", status: "ok" }
  //   }
  // }


  return error

}



