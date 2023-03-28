const { Schema, Types, model, Model } = require("mongoose");

const WorksSchema = new Schema(
  {
    works: [Schema.Types.Mixed],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("works", WorksSchema);
