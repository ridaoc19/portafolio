import { Router } from "express";
import services from "./services";
const { postLocation, getLocation  } = services;

const router = Router();

router.post("/", postLocation);
router.get("/", getLocation);

export { router };
