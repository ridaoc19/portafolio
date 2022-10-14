const axios = require("axios");
const Counts = require("./model.js");
require("dotenv").config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

module.exports = {
  async getCounter(req, res) {
    try {
      const verificationDB = await Counts.findOne({
        ip_address: req.params.ip,
      });
      res.status(200).json(verificationDB);
    } catch (error) {
      res.json({ err: error.message });
    }
  },



  async postCounter(req, res) {
    try {

      let data = req.body

      let body = 
      `ip: ${data.ip_address},
       ciudad: ${data.city},
       region: ${data.region},
       pais: ${data.country},
       continente: ${data.continent},
       moneda: ${data.currency_name},
       organizacion: ${data.organization_name},
       `

      client.messages
      .create({
         from: 'whatsapp:+14155238886',
         body: body,
         to: `whatsapp:${process.env.WTSP}`
       })
      .then(message => console.log(message.sid))
      .catch(err => console.log(err))

      // Counts
      Counts.create(data)
        .then((data) => res.status(200).json(data))
        .catch((error) => res.json({ message: error }));
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
