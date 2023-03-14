import { Router } from "express";
import services from "./services";
const { postWorks, getWorks, putWorks } = services;

const router = Router();

router.post("/", postWorks);
router.get("/", getWorks);
router.put("/", putWorks);

export { router };
