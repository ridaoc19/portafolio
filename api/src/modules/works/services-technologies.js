const { functionGet } = require("./functionGet");
const { Technologies, Functions } = require("./model");

module.exports = {
  async postTechnologies(req, res) {

    try {
      if (!req.body?._id) {
        await Technologies.create(req.body)
        functionGet(req, res, req.params.user_id)
      } else {
        const { _id, name, image, technologies, percentage } = req.body;
        await Technologies.findOneAndUpdate({ _id }, { name, image, technologies, percentage });
        functionGet(req, res, req.params.user_id)
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  async deleteTechnologies(req, res) {
    try {
      await Technologies.findByIdAndDelete(req.body._id)
      const getfunctions = await Functions.find()
      getfunctions.forEach(async t => await Functions.findByIdAndUpdate(t._id, { $pull: { technologies: req.body._id } }))
      functionGet(req, res, req.params.user_id)
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  putTechnologies(req, res) {
    Technologies.findByIdAndUpdate(
      req.params.id,
      { technologies: req.body.technologies },
      { new: true }
    )
      .then((data) => res.status(200).json(data))
      .catch((error) => res.json({ message: error }));
  },
};
