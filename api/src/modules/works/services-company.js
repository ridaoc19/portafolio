// import { handleHttp } from "../../core/utils/error.handle";

const { Login } = require("../login/model");
const { companyGet } = require("./functionGet");
const { Company, Position, Functions } = require("./model");

module.exports = {

  async postCompany(req, res) {
    console.log(req.body);
    if (!req.body?._id) {
      let company = await Company.create(req.body)
      await Login.findByIdAndUpdate(req.body.user_id, { $push: { company_id: company._id }, });

    } else if (req.body?._id) {
      const { _id, name, image, description, link, start_date, end_date, position } = req.body;
      await Company.findOneAndUpdate({ _id }, { name, image, description, link, start_date, end_date });
    }
    companyGet(req, res, req.body.user_id)
  },

  getCompany(req, res) {
    companyGet(req, res, req.params.id)
  },

  async deletCompany(req, res) {
    try {
      const company = await Company.findByIdAndDelete(req.params.id)

      await Login.findByIdAndUpdate(company.user_id, { $pull: { company_id: req.params.id } })
      if (company?.position?.length > 0) {
        company.position.forEach(async e => {
          let position = await Position.findByIdAndDelete(e)
          if (position?.functions.length > 0) {
            position.functions.forEach(async (d, i) => {
              let t = await Functions.findByIdAndDelete(d)
            })
          }
        })
      }

      companyGet(req, res, company.user_id)

    } catch (error) {
      res.json({ message: error.message })
    }



  }
};
