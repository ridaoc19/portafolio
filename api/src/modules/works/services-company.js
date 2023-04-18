// import { handleHttp } from "../../core/utils/error.handle";

const { companyGet } = require("./functionGet");
const { Company, Position, Functions } = require("./model");

module.exports = {

  async postCompany(req, res) {
    if (!req.body?._id) {
      await Company.create(req.body)

    } else if (req.body?._id) {
      const { _id, name, image, description, link, start_date, end_date, position } = req.body;
      await Company.findOneAndUpdate({ _id }, { name, image, description, link, start_date, end_date });
    }
    companyGet(req, res)
  },

  getCompany(req, res) {
    companyGet(req, res)
  },

  putCompany(req, res) {
  },

  deletCompany(req, res) {
    Company.findByIdAndDelete(req.params.id)
      .then(company => {
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

        companyGet(req, res)

      }).catch((error) => res.json({ message: error.message }));

  }
};
