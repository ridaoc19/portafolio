const axios = require("axios");
const Counts = require("./model.js");

module.exports = {
  async getCounter(req, res) {
    try {
      const verificationDB = await Counts.findOne({
        ip_address: req.params.ip,
      });

      res.json(verificationDB);
    } catch (error) {
      res.json({ err: error.message });
    }
  },

  async postCounter(req, res) {
    try {
      Counts.create(req.body)
        .then((data) => res.json(data))
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
