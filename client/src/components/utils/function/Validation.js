import moment from 'moment';
import 'moment-precise-range-plugin';
import { formatDate } from './date';

export default function Validation(name, value, change, mandatory) {

  let error = ""

  if (name === "name") {
    if (value !== "") {
      if (value.trim() === "") return error = { type: "Debe ingresar texto", stop: true }
      if (value.length < 3) {
        return error = { type: "Debe tener mas de 3 caracteres", stop: false }
      } else if (value.length >= 45) {
        return error = { type: "Solo debe tener hasta 45 caracteres", stop: true }
      }
    } else return error = { type: "Este campo es obligatorio", stop: false }
  }

  if (name === "technologies") {
    if (value === "") return error = { type: "Este campo es obligatorio", stop: false }
  }

  if (name === "image") {
    if (value !== "") {
      if (value.trim() === "") return error = { type: "Debe ingresar texto", stop: true }
      return error = { type: "Ingrese una URL valida HTTPS", stop: false }
    } else return error = { type: "Este campo es obligatorio", stop: false }
  }

  if (name === "link") {
    if (value !== "") {
      if (value.trim() === "") return error = { type: "Debe ingresar texto", stop: true }
      if (!/^https?:\/\/?.*$/.test(value) || value.toString().length < 14) return error = { type: "Ingrese una URL valida HTTPS", stop: false }
    } else return error = { type: "Este campo es obligatorio", stop: false }
  }

  if (name === "repository") {
    if (value !== "") {
      if (value.trim() === "") return error = { type: "Debe ingresar texto", stop: true }
      if (!/^https?:\/\/?.*$/.test(value) || value.toString().length < 14) return error = { type: "Ingrese una URL valida HTTPS", stop: false }
    } else return error = { type: "Este campo es obligatorio", stop: false }
  }

  if (name === "start_date" || name === "end_date") {

    if (value === "Presente") value = moment().format('YYYY-MM-DD')

    if (value !== "") {

      let year = new Date(value).getFullYear()
      if (year < 2000 || year > 2035) return error = { type: "Ingrese año valido", stop: false }

      if (name === "end_date") {
        if (change.start_date) {
          if (moment(change.start_date).diff(moment(value)) > 0) return error = { type: `${formatDate(value).date} menor a  ${formatDate(change.start_date).date}`, stop: false, empty: true }
        } else return error = { type: "Fecha inicio obligatoria", stop: false, empty: true }
      }

      if (name === "start_date" && change.end_date) {
        if (moment(value).diff(moment(change.end_date === "Presente" ? Date.now() : change.end_date)) > 0)
          return error = { type: `${formatDate(value).date} superior a ${formatDate(change.end_date === "Presente" ? moment().format('YYYY-MM-DD') : change.end_date).date}`, stop: false, empty: true }
      }
    } else return error = { type: "Este campo es obligatorio", stop: false }
  }

  if (name === "description") {
    if (value !== "") {
      if (value.trim() === "") return error = { type: "Debe ingresar texto", stop: true }
      if (value.length < 5) {
        return error = { type: "Debe tener mas de 5 caracteres", stop: false }
      } else if (value.length >= 300) {
        return error = { type: "Solo debe tener hasta 300 caracteres", stop: true }
      }
    } else return error = { type: "Este campo es obligatorio", stop: false }
  }

  if (name === "tasks") {
    if (value !== "") {
      if (value.trim() === "") return error = { type: "Debe ingresar texto", stop: true }
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

  return error

}



