export const id = (array) => {
    let number = null, i = 1
    while (!number) {
      if (!array.map(e => e.id).includes(i)) number = i
      i++
    }
    return number
  }

  export const _id = (array) => {
    let newArray = array.filter(f => Number(f._id)).map(e => e._id)

    let number = null
    let i = 1
    while (!number) {
      if(!newArray.includes(i)) number = i
      i++
    }
    return number
  }