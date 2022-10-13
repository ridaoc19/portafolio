

  export function getIpClient() {
    // fetch('http://localhost:3001/count', {
      fetch('https://portafolio-w1tt.onrender.com/count', {
      method: "POST",
      body: JSON.stringify(),
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(error => console.log(error))
  }

  // https://ipgeolocation.abstractapi.com/v1/?api_key=578130a355254e108446d95e45a74c84


  //   try {
  //     const response = await axios.get('https://ipinfo.io/json');
  //     console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  
  // getIpClient();