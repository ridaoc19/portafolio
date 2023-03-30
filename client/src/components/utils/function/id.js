const id = (array) => {
    let number = null, i = 1
    while (!number) {
      if (!array.map(e => e.id).includes(i)) number = i
      i++
    }
    return number
  }

  export default id;