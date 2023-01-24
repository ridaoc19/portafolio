import axios from "axios";
export const DATA_IP = "DATA_IP";

export function getClient() {
  return async function (dispatch) {
    await axios
      .get("https://api.ipify.org?format=json")
      .then(async (res) => {
        await axios
          .get(`${process.env.REACT_APP_URL}/count/${res.data.ip}`)
          .then((data) => {
            console.log(data)
            dispatch({ type: DATA_IP, payload: data.data });
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };
}

export function postClient() {
  try {
    return async function (dispatch) {
      let { data } = await axios.get(process.env.REACT_APP_API_GEOLOCATION);

      let ip = {
        ip_address: data.ip_address,
        city: data.city,
        region: data.region,
        postal_code: data.postal_code,
        country: data.country,
        continent: data.continent,

        name: data.timezone.name,
        current_time: data.timezone.current_time,

        png: data.flag.png,
        svg: data.flag.svg,

        currency_name: data.currency.currency_name,
        currency_code: data.currency.currency_code,

        autonomous_system_organization:
          data.connection.autonomous_system_organization,
        connection_type: data.connection.connection_type,
        isp_name: data.connection.isp_name,
        organization_name: data.connection.organization_name,
      };

      dispatch({ type: DATA_IP, payload: ip });

      fetch(`${process.env.REACT_APP_URL}/count`, {
        method: "POST",
        body: JSON.stringify(ip),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
        })
        .catch((error) => console.log(error));
    };
  } catch (error) {
    console.log(error);
  }
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
