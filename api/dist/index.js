"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_1 = __importDefault(require("./app"));
const mongo_1 = __importDefault(require("./src/core/db/mongo"));
const PORT = process.env.PORT || 3002;
app_1.default.listen(PORT, () => console.log(`inicio servidor express en puerto ${PORT}`));
(0, mongo_1.default)().then(() => console.log("Conexion base datos")).catch(error => console.log("Se ha producido un error en db", error));
