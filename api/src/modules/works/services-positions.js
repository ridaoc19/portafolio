
// import { handleHttp } from "../../core/utils/error.handle";

const { companyGet } = require("./functionGet");
const { Position, Company, Functions } = require("./model");

module.exports = {
  async postPosition(req, res) {
    try {
      if (!req.body?._id) {
        let createPosition = await Position.create(req.body);
        await Company.findByIdAndUpdate(req.body.company, { $push: { position: createPosition.id }, });
        companyGet(req, res, req.body.user_id);
      } else {
        const { _id, name, start_date, end_date } = req.body;
        await Position.findOneAndUpdate({ _id }, { name, start_date, end_date });
        companyGet(req, res, req.body.user_id);
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },


  async deletePosition(req, res) {
    try {
      let position = await Position.findByIdAndDelete(req.params.id);
      let company = await Company.findByIdAndUpdate(position.company, { $pull: { position: req.params.id } });

      if (position?.functions.length > 0) {
        position.functions.forEach(async (d) => {
          await Functions.findByIdAndDelete(d);
        });
      }
      companyGet(req, res, company.user_id);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
