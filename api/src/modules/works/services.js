const Works = require("./model");
// import { handleHttp } from "../../core/utils/error.handle";

module.exports = {
  postWorks(req, res) {
    Works.create(req.body)
      .then((data) => res.status(200).json(data))
      .catch((error) => res.json({ message: error }));
  },

  getWorks(req, res) {
    Works.find()
      .then((data) => {
        const responseTecnologies = () => {
          let result = data[0].works
            ?.map((e) => [e.position?.map((r) => r.function)])
            .flat(Infinity)
            .filter((e) => e.tecnologies.length > 0);
          return result;
        };

        res
          .status(200)
          .json({
            experience: responseTecnologies(),
            works: data[0].works,
            id: data[0].id,
          });
      })
      .catch((error) => res.json({ message: error.message }));
  },

  putWorks(req, res) {
    console.log(req.body, req.params.id)
    // Works.findByIdAndUpdate(
    //   req.params.id,
    //   { works: req.body.works },
    //   { new: true }
    // )
      // .then((data) => res.status(200).json(data))
      // .catch((error) => res.json({ message: error }));
  },
};
