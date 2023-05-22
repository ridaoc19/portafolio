const { University } = require("../education/model");
const { Location } = require("../location/model");
const { Login } = require("../login/model");
const { Company, Position, Technologies, Functions } = require("./model");
// import { handleHttp } from "../../core/utils/error.handle";

module.exports = {

  async getWorks(req, res) {
    try {
      const login = await Login.findOne({ user_id: req.params.id })
      if(!login) return res.status(200).json({ company: [], position: [], functions: [], technologies: [], education: [] })
      const company = await Company.find({ _id: login.company_id }).populate('position').sort({ start_date: -1 })
      const position = await Position.find({ _id: company?.map(c => c.position).flat(Infinity) }).sort({ start_date: -1 })
      const functions = await Functions.find({ _id: position?.map(p => p.functions).flat(Infinity) }).populate('technologies').sort({ start_date: -1 })
      const technologies = await Technologies.find({ _id: functions?.map(f => f.technologies).flat(Infinity) }).sort({ start_date: -1 })
      const education = await University.find({ _id: login.university_id }).populate('title_id').sort({ start_date: -1 })
      res.status(200).json({ company, position, functions, technologies, education });
    } catch (error) {
      res.json({ message: error.message })
    }

  },

  async generalWorks(req, res) {
    try {
      const location = await Location.find()
      const login = await Login.find().populate('company_id').sort({ start_date: 1 })
      const company = await Company.find().populate('position').sort({ start_date: 1 })
      const position = await Position.find().populate('functions').sort({ start_date: 1 })
      const functions = await Functions.find().sort({ start_date: 1 })
      const technologies = await Technologies.find().sort({ start_date: 1 })
      res.status(200).json("hola");
    } catch (error) {
      res.json({ message: error.message })
    }

  },
};

 // .populate("technologies", {
    //   createdAt: 0,
    //   updatedAt: 0,
    // })
