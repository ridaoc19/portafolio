const { Login } = require("../login/model");
const { University } = require("./model");

const universityGet = async (req, res, id) => {
    try {
        const login = await Login.findById({ _id: id })
        const education = await University.find({ _id: login.university_id }).populate('title_id').sort({ start_date: 1 })



        res.status(200).json({ university: education, title: education.map(d => d.title_id).flat(Infinity) });
    } catch (error) {
        res.json({ message: error.message })
    }
}

const titleGet = async (req, res, id) => {
    try {
        const title = await University.findById({ _id: id }).populate({ path: "title_id" }).sort({ start_date: 1 })
        const university = await Login.findById({ _id: title.user_id }).populate({ path: "university_id" }).sort({ start_date: 1 })
        res.status(200).json({ title: title.title_id, university: university.university_id });
    } catch (error) {
        res.json({ message: error.message })
    }
}


module.exports = { titleGet, universityGet }