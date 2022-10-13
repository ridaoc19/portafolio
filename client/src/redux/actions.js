import axios from "axios";

export async function getClient() {

 await axios.get("https://api.ipify.org?format=json")
    .then(res => {
      // console.log(res.data)
      // axios.get(`http://localhost:3001/count/${res.data.ip}`)
      axios.get(`https://portafolio-w1tt.onrender.com/count/${res.data.ip}`)
      .then(data => {

        if(data.data?.postal_code === "43007") return console.log("estas verficando en casa")
        postClient()


      })
    })

  // const { data } = await axios.get(`http://localhost:3001/count/${response.data.ip}`)
    // const  { data } = await axios.get('https://portafolio-w1tt.onrender.com/')


      // if(data?.postal_code === "43007") return console.log("estas verficando en casa")
      // postClient()
}

export async function postClient() {
  let {data} = axios.get('https://ipgeolocation.abstractapi.com/v1/?api_key=578130a355254e108446d95e45a74c84')

  // let data = {
  //   ip_address: "83.43.130.56",
  //   city: "Tarragona",
  //   city_geoname_id: 3108288,
  //   region: "Catalonia",
  //   region_iso_code: "CT",
  //   region_geoname_id: 3336901,
  //   postal_code: "43007",
  //   country: "Spain",
  //   country_code: "ES",
  //   country_geoname_id: 2510769,
  //   country_is_eu: true,
  //   continent: "Europe",
  //   continent_code: "EU",
  //   continent_geoname_id: 6255148,
  //   longitude: 1.254,
  //   latitude: 41.1185,
  //   security: {
  //     is_vpn: false,
  //   },
  //   timezone: {
  //     name: "Europe/Madrid",
  //     abbreviation: "CEST",
  //     gmt_offset: 2,
  //     current_time: "20:30:06",
  //     is_dst: true,
  //   },
  //   flag: {
  //     emoji: "🇪🇸",
  //     unicode: "U+1F1EA U+1F1F8",
  //     png: "https://static.abstractapi.com/country-flags/ES_flag.png",
  //     svg: "https://static.abstractapi.com/country-flags/ES_flag.svg",
  //   },
  //   currency: {
  //     currency_name: "Euros",
  //     currency_code: "EUR",
  //   },
  //   connection: {
  //     autonomous_system_number: 3352,
  //     autonomous_system_organization: "Telefonica De Espana S.a.u.",
  //     connection_type: "Corporate",
  //     isp_name: "Telefonica de Espana SAU",
  //     organization_name: "RIMA (Red IP Multi Acceso)",
  //   },
  // };

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

  // fetch("http://localhost:3001/count", {
    fetch('https://portafolio-w1tt.onrender.com/count', {
    method: "POST",
    body: JSON.stringify(ip),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
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
