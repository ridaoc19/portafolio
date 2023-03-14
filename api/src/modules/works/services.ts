import { Request, Response } from "express";
import Works from "./model";
import { handleHttp } from "../../core/utils/error.handle";


export default {
  postWorks(req: Request, res: Response) {
    Works.create(req.body)
      .then((data) => res.status(200).json(data))
      .catch((error) => res.json({ message: error }));
  },

  getWorks(req: Request, res: Response) {
    // const response = moment.preciseDiff("2014-01-01 12:00:00", "2014-04-20 12:00:00");
    Works.find()
      .then(data => res.status(200).json(data))
      .catch((error) => res.json({ message: error }));
  },


  putWorks(req: Request, res: Response) {
    Works.findByIdAndUpdate(req.params.id, { works: req.body.works }, { new: true })
      .then((data) => res.status(200).json(data))
      .catch((error) => res.json({ message: error }));
  },
};
