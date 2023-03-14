import { Router } from "express";
import { readdirSync} from "fs";
import path from "path";

const router = Router();

readdirSync(path.join(__dirname, "src/modules")).map((fileName) => {
    import(`./src/modules/${fileName}/controller`).then((moduleRouter) => {
        router.use(`/${fileName}`, moduleRouter.router);
    });
});

export { router };
