const { Login } = require("../login/model");
const { Company, Technologies, Position, Functions } = require("./model");


const companyGet = async (req, res, id) => {
    try {
        const login = await Login.findById({ _id: id})
        const company = await Company.find({ _id: login.company_id}).populate({ path: "position" }).sort({ start_date: 1 })
        const technologies = await Technologies.find();
        res.status(200).json({ company, technologies });
    } catch (error) {
        res.json({ message: error.message })
    }
    // const company = 

    // Company.find()
    //     .populate({ path: "position" })
    //     .sort({ start_date: 1 })
    //     .then(async (company) => {
    //         let technologies = await Technologies.find();
    //         res.status(200).json({ company, technologies });
    //     })
    //     .catch((error) => res.json({ message: error.message }));
}

const functionGet = async (req, res, id) => {
    const login = await Login.findById({ _id: id})
    // const company = await Company.find({ _id: login.company_id}).populate({ path: "position" }).sort({ start_date: 1 })
    let company = Promise.resolve(Company.find({ _id: login.company_id}).populate({ path: "position" }).sort({ start_date: 1 }))
    let functions = Promise.resolve(Position.findById(req.params.id).sort({ "start_date": 1 }).populate({ path: "functions" }))
    let technologies = Promise.resolve(Technologies.find())

    Promise.all([company, functions, technologies]).then((values) => {
        res.status(200).json({ company: values[0], functions: values[1]?.functions ? values[1].functions : [], technologies: values[2] });
    }).catch(error => {
        res.status(400).json({ message: error.message });
    });
}


module.exports = { functionGet, companyGet }