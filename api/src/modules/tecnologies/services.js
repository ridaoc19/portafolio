const Tecnologies = require("./model");
const { handleHttp } = require("../../core/utils/error.handle");

module.exports = {
  postTecnologies(req, res) {
    Tecnologies.create(req.body)
      .then((data) => res.status(200).json(data))
      .catch((error) => res.json({ message: error.message }));
  },

  getTecnologies(req, res) {
    Tecnologies.find()
      .then((all) => res.status(200).json(all))
      .catch((error) => res.json({ message: error }));
  },

  putTecnologies(req, res){
    Tecnologies.findByIdAndUpdate(req.params.id, { tecnologies: req.body.tecnologies }, { new: true })
    .then((data) => res.status(200).json(data))
    .catch((error) => res.json({ message: error }));
  }
};
