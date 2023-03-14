import { Request, Response } from "express";
import Ubication from "./model";
import { handleHttp } from "../../core/utils/error.handle";

export default {
  postUbication(req: Request, res: Response) {
    try {
      res.json("postubication");
    } catch (error) {
      handleHttp(res, "error en post ");
    }
  },

  getUbication(req: Request, res: Response) {
    try {
      res.json("getubication");
    } catch (error) {
      handleHttp(res, "error get");
    }
  },
};
