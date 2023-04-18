const { Technologies } = require("./model");

module.exports = {
  postTechnologies(req, res) {
    Technologies.create(req.body)
      .then((data) => res.status(200).json(data))
      .catch((error) => res.json({ message: error.message }));
  },

  getTechnologies(req, res) {
    Technologies.find()
      .then((all) => res.status(200).json(all))
      .catch((error) => res.json({ message: error }));
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
