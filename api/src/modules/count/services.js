const Counts = require("./model.js");
require("dotenv").config();

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
    Counts.create(req.body)
      .then((data) => res.status(200).json(data))
      .catch((error) => res.json({ message: error }));
  },
};
