const { Login } = require("../login/model");
const { Company, Position, Technologies, Works, Functions } = require("./model");
// import { handleHttp } from "../../core/utils/error.handle";

module.exports = {

  async getWorks(req, res) {
    try {
      const login = await Login.findOne({ user_id: req.params.id})
      const company = await Company.find({ _id: login.company_id}).populate('position').sort({ start_date: 1 })
      const position = await Position.find({ _id: company?.map(c => c.position).flat(Infinity)}).sort({ start_date: 1 })
      const functions = await Functions.find({ _id: position?.map(p => p.functions).flat(Infinity)}).populate('tecnologies').sort({ start_date: 1 })
      const technologies = await Technologies.find({ _id: functions?.map(f => f.tecnologies).flat(Infinity)}).sort({ start_date: 1 })

      res.status(200).json({company, position, functions, technologies});
  } catch (error) {
      res.json({ message: error.message })
  }

  },

};

 // .populate("tecnologies", {
    //   createdAt: 0,
    //   updatedAt: 0,
    // })
