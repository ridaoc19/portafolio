export const id = (array = []) => {
    let number = null, i = 1
    while (!number) {
      if (!array.map(e => e.id).includes(i)) number = i
      i++
    }
    return number
  }

  export const _id = (array) => {
    let newArray = array.map(e => e._id).filter(f => f.includes("-#-")).map(s => Number(s.split("-")[0]))

    let number = null
    let i = 1
    while (!number) {
      if(!newArray.includes(i)) number = i
      i++
    }
    return number.toString()
  }