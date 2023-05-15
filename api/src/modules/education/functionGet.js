const { Login } = require("../login/model");
const { University } = require("./model");

const universityGet = async (req, res, id) => {
    try {
        const login = await Login.findById({ _id: id })
        const education = await University.find({ _id: login.university_id }).populate('title_id').sort({ start_date: 1 })

        res.status(200).json({ university: education });
    } catch (error) {
        res.json({ message: error.message })
    }
}

module.exports = { universityGet }