const { Login } = require("../login/model");
const { titleGet } = require("./functionGet");
const { Title, University } = require("./model");

module.exports = {

  async postTitle(req, res) {
    if (!req.body?._id) {
      let title = await Title.create(req.body)
      await University.findByIdAndUpdate(req.body.university_id, { $push: { title_id: title._id }, });

    } else if (req.body?._id) {
      const { _id, name, start_date, end_date, description, certificate } = req.body;
      await Title.findOneAndUpdate({ _id }, { name, start_date, end_date, description, certificate });
    }
    titleGet(req, res, req.body.university_id)
  },

  getTitle(req, res) {
    titleGet(req, res, req.params.id)
  },

  async deletTitle(req, res) {
    try {
      const title = await Title.findByIdAndDelete(req.params.id)

      await University.findByIdAndUpdate(title.university_id, { $pull: { title_id: req.params.id } })

      titleGet(req, res, title.university_id)

    } catch (error) {
      res.json({ message: error.message })
    }



  }
};
