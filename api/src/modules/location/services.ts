import { Request, Response } from "express";
import Location from "./model";
import { handleHttp } from "../../core/utils/error.handle";

export default {
  postLocation(req: Request, res: Response) {
      Location.create(req.body)
      .then((data) => res.status(200).json(data))
      .catch((error) => res.json({ message: error }));
  },

 async getLocation(req: Request, res: Response) {
    try {
      const verificationDB = await Location.findOne({
        ip_address: req.params.ip,
      });
      res.status(200).json(verificationDB);
    } catch (error) {
      handleHttp(res, "error en get ");
    }
  },
};
