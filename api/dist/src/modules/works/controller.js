"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const services_1 = __importDefault(require("./services"));
const { postWorks, getWorks, putWorks } = services_1.default;
const router = (0, express_1.Router)();
exports.router = router;
router.post("/", postWorks);
router.get("/", getWorks);
router.put("/", putWorks);
