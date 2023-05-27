const { University } = require("../education/model");
const { Login } = require("../login/model");
const { Company, Technologies, Position } = require("./model");


const companyGet = async (req, res, id) => {
    try {
        const login = await Login.findById({ _id: id})
        const company = await Company.find({ _id: login.company_id}).populate({ path: "position" }).sort({ start_date: 1 })
        const technologies = await Technologies.find({user_id: id}).sort({ "start_date": 1 }).populate({ path: "user_id" })
        const education = await University.find({ _id: login.university_id }).populate('title_id').sort({ start_date: 1 })
  
        
        res.status(200).json({ company, technologies, university: education });
    } catch (error) {
        res.json({ message: error.message })
    }
}

const functionGet = async (req, res, id) => {
    const login = await Login.findById({ _id: id})
    let company = Promise.resolve(Company.find({ _id: login.company_id}).populate({ path: "position" }).sort({ start_date: 1 }))
    let functions = Promise.resolve(Position.findById(req.params.id).sort({ "start_date": 1 }).populate({ path: "functions" }))
    let technologies = Promise.resolve(Technologies.find({user_id: id}).sort({ "start_date": 1 }).populate({ path: "user_id" }))

    Promise.all([company, functions, technologies]).then((values) => {
        res.status(200).json({ company: values[0], functions: values[1]?.functions ? values[1].functions : [], technologies: values[2] });
    }).catch(error => {
        res.status(400).json({ message: error.message });
    });
}

module.exports = { functionGet, companyGet }