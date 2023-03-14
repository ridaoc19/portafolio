import { Router } from "express";
import services from "./services";
const { postUbication, getUbication } = services;

const router = Router();

router.post("/", postUbication);
router.get("/", getUbication);

export { router };
