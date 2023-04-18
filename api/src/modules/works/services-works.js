const { Company, Position, Technologies, Works, Functions } = require("./model");
// import { handleHttp } from "../../core/utils/error.handle";

module.exports = {
  postWorks(req, res) {
    const { company, position, functions, technologies } = req.body;

    const resCompany = Promise.resolve(Company.create(company));
    const resPosition = Promise.resolve(Position.create(position));
    const resFunction = Promise.resolve(Function.create(functions));

    Promise.all([resCompany, resPosition, resFunction])
      .then((values) => {

        Works.create({
          company: values[0]._id,
          position: values[1]._id,
          functions: values[2].map((e) => e._id),
          technologies: technologies,
        })
          .then(response => {
            res.status(200).json(response);
          })

      })
      .catch((reason) => {
        console.log(reason);
      });

    // Promise.resolve(
    //   functions.length > 0 ? Function.insertMany(functions) : []
    // ).then((data) => {
    //   // .map(e => e._id)
    //   Position.create(
    //     Object.assign(position, { function: data.map((e) => e._id) })
    //   ).then((response) => {
    //     Company.create(Object.assign(company, { position: response._id }))
    //     .then((result) => res.status(200).json(result));
    //   });
    //   // JSON.stringify(position) !== '{}'? Position.create(Object.assign(position, { position: [data.map(e => e._id)] })): Company(company)
    // });

    // const resCompany = Promise.resolve(new Company(company))
    // const resPosition = Promise.resolve(new Position(position))
    // const resFunction = Promise.resolve(Function.insertMany(functions))
    //   .then((values) => {
    // res.status(200).json(req.body);
    // })
    // .catch((reason) => {
    //   console.log(reason);
    // });

    // console.log(resPosition)

    // Promise.all([resCompany, resPosition, resFunction])
    //   .then(values => {

    // res.status(200).json(values)
    // }).catch(reason => {
    //   console.log(reason)
    // });

    // Works.create(req.body.Works)
    //   .then((data) => res.status(200).json(data))
    //   .catch((error) => res.json({ message: error }));
  },

  async getWorks(req, res) {

    Company.findByIdAndDelete(req.params.id)
      .then(company => {

        if (company?.position?.length > 0) {
          console.log(company,"entro posi")
          company.position.forEach(async e => {
            let position = await Position.findByIdAndDelete(e)

            if (position?.functions.length > 0) {
              console.log(position,"entro func")
              position.functions.forEach(async (d, i) => {
                await Functions.findByIdAndDelete(d)
              })}

          })}
        res.status(200).json(company);

      })



      // Company.findById(req.params.id)
      // .populate('position')
      // .then(company => {

        // Position.find({_id: { $in: i.product_id} }).populate('image');

        
        // if (company?.position?.length > 0) {
        //   company.position.forEach(async e => {
        //     let position = await Position.findById(e)
        //     if (position.functions.length > 0) {
        //       position.functions.forEach(async (d, i) => {
        //         await Functions.findByIdAndDelete(d)
        //       });
        //     }
        //   })

        // } else {
        // }
        // res.status(200).json(company);

      // })





    // let company = await Company.findById(req.params.id)
    // if (company?.position?.length > 0) {
    //   company.position.forEach(async e => {
    //     await Position.findById(e)
    //   })

    //   // console.log(position)
    //   res.status(200).json([position]);

    // }

    // console.log(position)
    // res.status(200).json(position);



    // .populate({path: "function", model: Function})
    // .populate({ path: "company"})
    // .populate({path: "position"})

    // .populate({path: "functions", model: Functions}).exec()
    // .populate( {path: "technologies", model: Technologies})
    // .populate({path: "function", model: Function})
    // .populate("tecnologies", {
    //   createdAt: 0,
    //   updatedAt: 0,
    // })

    // Promise.all([resCompany, resPosition, resFunction])
    // .then((values) => {
    //   res.status(200).json(values);
    // })
    // .catch((reason) => {
    //   console.log(reason);
    // });

  },

  putWorks(req, res) {
    console.log(req.body, req.params.id);
    // Works.findByIdAndUpdate(
    //   req.params.id,
    //   { works: req.body.works },
    //   { new: true }
    // )
    // .then((data) => res.status(200).json(data))
    // .catch((error) => res.json({ message: error }));
  },
};
