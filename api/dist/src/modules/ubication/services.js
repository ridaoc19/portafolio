"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_handle_1 = require("../../core/utils/error.handle");
exports.default = {
    postUbication(req, res) {
        try {
            res.json("postubication");
        }
        catch (error) {
            (0, error_handle_1.handleHttp)(res, "error en post ");
        }
    },
    getUbication(req, res) {
        try {
            res.json("getubication");
        }
        catch (error) {
            (0, error_handle_1.handleHttp)(res, "error get");
        }
    },
};
