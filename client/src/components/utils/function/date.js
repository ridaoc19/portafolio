import moment from 'moment';
import 'moment-precise-range-plugin';


export function formatDate(date, state, value) {
  const result = date.split("-");
  const [year, month, day] = [result[0], result[1] - 1, result[2]];

  if (!isNaN(month)) {
    date = new Date(year, month, day).toLocaleDateString();
    value = [Number(year), month + 1, Number(day)]
  } else {
    state = year;
    date = new Date().toLocaleDateString();
    value = [new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate()]
  }
  return { date, state, value }
}


export function totalYear(start, end) {
  let { years, months, days } = moment.preciseDiff(start, end, true);
  let dia, mes, ano

  dia = days > 1 ? 'días' : 'día'
  mes = months > 1 ? 'meses' : 'mes'
  ano = years > 1 ? 'años' : 'año'

  let date = years > 0 ? `${years} ${ano} ${months} ${mes} ${days} ${dia}` : `${months} ${mes} ${days} ${dia}`

  return date
}