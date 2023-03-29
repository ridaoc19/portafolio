const Works = require("./model");
// import { handleHttp } from "../../core/utils/error.handle";

module.exports = {
  postWorks(req, res) {
    Works.create(req.body)
      .then((data) => res.status(200).json(data))
      .catch((error) => res.json({ message: error }));
  },

  getWorks(req, res) {
    // const response = moment.preciseDiff("2014-01-01 12:00:00", "2014-04-20 12:00:00");
    Works.find()
      .then((data) => {
        const responseTecnologies = () => {
          // let result = data[0].works?.map((e) => [e.position?.map(r => r.function?.map(d => d.tecnologies))].flat(Infinity))
          let result = data[0].works
            ?.map((e) => [e.position?.map((r) => r.function)])
            .flat(Infinity)
            .filter((e) => e.tecnologies.length > 0);

          // const mergeArrays = (...arrays) => [...arrays].flat(Infinity)

          return result;
        };

       
        res
          .status(200)
          .json({ experience: responseTecnologies(), works: data[0].works });
      })
      .catch((error) => res.json({ message: error.message }));
  },

  putWorks(req, res) {
    Works.findByIdAndUpdate(
      req.params.id,
      { works: req.body.works },
      { new: true }
    )
      .then((data) => res.status(200).json(data))
      .catch((error) => res.json({ message: error }));
  },
};
