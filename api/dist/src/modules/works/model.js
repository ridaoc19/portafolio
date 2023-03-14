"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const WorksSchema = new mongoose_1.Schema({
    works: [mongoose_1.Schema.Types.Mixed],
}, {
    timestamps: true,
    versionKey: false,
});
exports.default = (0, mongoose_1.model)("works", WorksSchema);
