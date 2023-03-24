import { LOADING, RESPONSE_LOCATION } from "./types";

export const postLocation = (): any => {
  return (dispatch: DispatchType) => {

    dispatch({ type: LOADING });

    fetch(`${process.env.REACT_APP_ABSTRACT}`)
      .then((res) => res.json())
      .then((data) => {

        if (data) {
          let ip: any = {
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

          fetch(`${process.env.REACT_APP_URL}/location`, {
            method: "POST",
            body: JSON.stringify(ip),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((res) => {

              sessionStorage.location = JSON.stringify({
                ip_address: res.ip_address,
                city: res.city,
                region: res.region,
                county: res.country,
                continent: res.continent,
                svg: res.svg,
                id: res._id,
                createdAt: res.createdAt,
              });


              dispatch({ type: RESPONSE_LOCATION });
            })
            .catch((error) => console.log(error));

        }

      })
      .catch((error) => "");
  }
};


// export function getLocation(id: string): any {
//   return async function (dispatch: DispatchType) {
//     try {


//       let responseGet = await axios.get(`${process.env.REACT_APP_URL}/location/${id}`);

//       dispatch({ type: RESPONSE_LOCATION });
//     } catch (error) {
//       console.log({ errorGetApi: error });
//     }
//   };
// }

// export const verificationIP = (localIP: string): any => {
//   async (dispatch: DispatchType) => {
//     dispatch({ type: LOADING });
//     let ip = await axios.get("https://api.ipify.org?format=json")

//     if (localIP === ip.data.ip) {
//       sessionStorage.location = JSON.stringify(JSON.stringify(localStorage.location));
//     } else{
//       dispatch(postLocation())
//     }
//   }

// }