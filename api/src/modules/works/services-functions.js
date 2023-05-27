
// import { handleHttp } from "../../core/utils/error.handle";

const { functionGet } = require("./functionGet");
const { Functions, Position } = require("./model");

module.exports = {

  async postFunctions(req, res) {
    try {
      if (!req.body?._id) {
        let createFunction = await Functions.create(req.body)
        await Position.findByIdAndUpdate(req.body.position, { $push: { functions: createFunction.id } })
        functionGet(req, res, req.params.user_id)
      } else {
        const { _id, name, image, link, start_date, end_date, repository, tasks, technologies } = req.body;
        await Functions.findOneAndUpdate({ _id }, { name, image, link, start_date, end_date, repository, tasks, technologies });
        functionGet(req, res, req.params.user_id)
      }
    } catch (error) {
      res.json({ message: error.message })
    }
  },

  getFunctions(req, res) {
    functionGet(req, res, req.params.user_id)
  },

  async deleteFunctions(req, res) {
    try {
      let functions = await Functions.findByIdAndDelete(req.body.id_delete);
      await Position.findByIdAndUpdate(functions.position, { $pull: { functions: req.body.id_delete } })
      functionGet(req, res, req.params.user_id)
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
