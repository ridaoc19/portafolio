
export function dateFormat(date) {

  const result = date.split("-");
  const [year, month, day] = [result[0], result[1] - 1, result[2]];
  const otro = [result[0], result[1] - 1, result[2]];

  const responseDate = new Date(result[0], result[1] - 1, result[2]);

  const longDate = responseDate.toLocaleDateString();

  return { longDate, year, month, day, responseDate, otro };
}

// const longDate = responseDate.toLocaleDateString("es-ES", options);
// let options = { year: "numeric", month: "long", day: "numeric" };

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

