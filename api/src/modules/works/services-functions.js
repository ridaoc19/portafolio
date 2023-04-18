
// import { handleHttp } from "../../core/utils/error.handle";

const { functionGet } = require("./functionGet");
const { Functions, Position } = require("./model");

module.exports = {

  async postFunctions(req, res) {
    try {

      if (!req.body?._id) {
        let createFunction = await Functions.create(req.body)
        await Position.findByIdAndUpdate(req.body.position, { $push: { functions: createFunction.id } })
        functionGet(req, res)
      } else {
        const { _id, name, link, start_date, end_date, repository, tasks, tecnologies } = req.body;
        await Functions.findOneAndUpdate({ _id }, { name, link, start_date, end_date, repository, tasks, tecnologies });
        functionGet(req, res)
      }
    } catch (error) {
      res.json({ message: error.message })
    }
  },

  getFunctions(req, res) {
    functionGet(req, res)
  },

  async deleteFunctions(req, res) {
    try {
      let functions = await Functions.findByIdAndDelete(req.params.id);
      await Position.findByIdAndUpdate(functions.position, { $pull: { functions: req.params.id } })
      functionGet(req, res)
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
