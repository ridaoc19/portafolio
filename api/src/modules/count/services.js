const axios = require("axios");
const Counts = require("./model.js");

module.exports = {
  async postCounter(req, res) {
    try {
      const response = await axios.get("https://api.ipify.org?format=json")

      const verificationDB = await Counts.findOne({ip_address: response.data.ip})

      if(verificationDB?.postal_code === "43007") return res.json("estas verficiando en casa")      
      // res.json(response.data.ip)
      const { data } = await axios.get('https://ipgeolocation.abstractapi.com/v1/?api_key=578130a355254e108446d95e45a74c84')
       
      let ip =  {
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
            autonomous_system_organization: data.connection.autonomous_system_organization,
            connection_type: data.connection.connection_type,
            isp_name: data.connection.isp_name,
            organization_name: data.connection.organization_name,
          }

           Counts.create(ip)
           .then(data => res.json(data))
           .catch(error => res.json({message: error}))

    } catch (error) {
      res.json({ err: error.message });
    }
  },
};

// const result = await Counts.find()
// res.json(result)

// const verification = await Counts.findOne({ ip_address: data.ip });

//   if (verification !== null) return res.json("ya esta registrado")
//     res.json(verification)

// const axios = require('axios');
// axios.get('https://ipgeolocation.abstractapi.com/v1/?api_key=578130a355254e108446d95e45a74c84')
//     .then(response => {
//         console.log(response.data);
//     })
//     .catch(error => {
//         console.log(error);
//     });
