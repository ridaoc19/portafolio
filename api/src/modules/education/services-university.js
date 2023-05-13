const { Login } = require("../login/model");
const { universityGet } = require("./functionGet");
const { University, Title } = require("./model");

module.exports = {

  async postUniversity(req, res) {
    if (!req.body?._id) {
      let university = await University.create(req.body)
      await Login.findByIdAndUpdate(req.body.user_id, { $push: { university_id: university._id }, });

    } else if (req.body?._id) {
      const { _id, name, image, link } = req.body;
      await University.findOneAndUpdate({ _id }, { name, image, link });
    }
    universityGet(req, res, req.body.user_id)
  },

  getuniversity(req, res) {
    universityGet(req, res, req.params.id)
  },

  async deletUniversity(req, res) {
    try {
      const university = await University.findByIdAndDelete(req.params.id)

      await Login.findByIdAndUpdate(university.user_id, { $pull: { university_id: req.params.id } })
      if (university?.title_id?.length > 0) {
        university.title_id.forEach(async e => {
          await Title.findByIdAndDelete(e)
        })
      }

      universityGet(req, res, university.user_id)

    } catch (error) {
      res.json({ message: error.message })
    }



  }
};
