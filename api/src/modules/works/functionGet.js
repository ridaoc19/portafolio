const { Company, Technologies, Position, Functions } = require("./model");


const companyGet = (req, res) => {
    Company.find()
        .populate({ path: "position" })
        .sort({ start_date: 1 })
        .then(async (company) => {
            let technologies = await Technologies.find();
            res.status(200).json({ company, technologies });
        })
        .catch((error) => res.json({ message: error.message }));
}

const functionGet = (req, res) => {
    let company = Promise.resolve(Company.find().populate({ path: "position" }).sort({ start_date: 1 }))
    let functions = Promise.resolve(Position.findById(req.params.id).sort({ "start_date": 1 }).populate({ path: "functions" }))
    let technologies = Promise.resolve(Technologies.find())

    Promise.all([company, functions, technologies]).then((values) => {
        res.status(200).json({ company: values[0], functions: values[1]?.functions ? values[1].functions : [], technologies: values[2] });
    }).catch(error => {
        res.status(400).json({ message: error.message });
    });
}


module.exports = { functionGet, companyGet }