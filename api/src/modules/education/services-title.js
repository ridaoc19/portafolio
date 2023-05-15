const { Login } = require("../login/model");
const { universityGet } = require("./functionGet");
const { Title, University } = require("./model");

module.exports = {

  async postTitle(req, res) {
    if (!req.body?._id) {
      let title = await Title.create(req.body)
      await University.findByIdAndUpdate(req.body.university_id, { $push: { title_id: title._id }, });

    } else if (req.body?._id) {
      const { _id, name, start_date, end_date, description, image } = req.body;
      await Title.findOneAndUpdate({ _id }, { name, start_date, end_date, description, image });
    }
    universityGet(req, res, req.params.user_id)
  },

  async deletTitle(req, res) {
    try {
      const title = await Title.findByIdAndDelete(req.params.id)

      await University.findByIdAndUpdate(title.university_id, { $pull: { title_id: req.params.id } })

      universityGet(req, res, req.params.user_id)

    } catch (error) {
      res.json({ message: error.message })
    }



  }
};
