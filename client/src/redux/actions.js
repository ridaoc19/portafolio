import axios from 'axios';
export const DATA_IP = "DATA_IP";

export function getClient() {
  return async function (dispatch) {
    await axios.get("https://api.ipify.org?format=json")
      .then(async res => {
        await axios.get(`${process.env.REACT_APP_URL}/count/${res.data.ip}`)
          .then(data => {
            dispatch({ type: DATA_IP, payload: data.data })
          }).catch(err => console.log(err))
      }).catch(err => console.log(err))
  }
}

export function postClient() {
  try {
    
  return async function (dispatch) {
    
    let { data } = await axios.get('https://ipgeolocation.abstractapi.com/v1/?api_key=578130a355254e108446d95e45a74c84')

    let ip = {
      ip_address: data.ip_address,
      city: data.city,
      city_geoname_id: data.city_geoname_id,
      region: data.region,
      region_iso_code: data.region_iso_code,
      region_geoname_id: data.region_geoname_id,
      postal_code: data.postal_code,
      country: data.country,
      country_code: data.country_code,
      country_geoname_id: data.country_geoname_id,
      country_is_eu: data.country_is_eu,
      continent: data.continent,
      continent_code: data.continent_geoname_id,
      continent_geoname_id: data.continent_geoname_id,
      longitude: data.longitude,
      latitude: data.latitude,
      is_vpn: data.security.is_vpn,
      name: data.timezone.name,
      abbreviation: data.timezone.abbreviation,
      gmt_offset: data.timezone.gmt_offset,
      current_time: data.timezone.current_time,
      is_dst: data.timezone.is_dst,
      emoji: data.flag.emoji,
      unicode: data.flag.unicode,
      png: data.flag.png,
      svg: data.flag.svg,
      currency_name: data.currency.currency_name,
      currency_code: data.currency.currency_code,
      autonomous_system_number: data.connection.autonomous_system_number,
      autonomous_system_organization:
        data.connection.autonomous_system_organization,
      connection_type: data.connection.connection_type,
      isp_name: data.connection.isp_name,
      organization_name: data.connection.organization_name,
    };

    fetch(`${process.env.REACT_APP_URL}/count`, {
      method: "POST",
      body: JSON.stringify(ip),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch({ type: DATA_IP, payload: res })
      })
      .catch((error) => console.log(error));
  }
} catch (error) {
    console.log(error)
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
