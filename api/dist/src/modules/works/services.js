"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = __importDefault(require("./model"));
exports.default = {
    postWorks(req, res) {
        model_1.default.create(req.body)
            .then((data) => res.status(200).json(data))
            .catch((error) => res.json({ message: error }));
    },
    getWorks(req, res) {
        // const response = moment.preciseDiff("2014-01-01 12:00:00", "2014-04-20 12:00:00");
        model_1.default.find()
            .then(data => res.status(200).json(data))
            .catch((error) => res.json({ message: error }));
    },
    putWorks(req, res) {
        model_1.default.findByIdAndUpdate(req.params.id, { works: req.body.works }, { new: true })
            .then((data) => res.status(200).json(data))
            .catch((error) => res.json({ message: error }));
    },
};
