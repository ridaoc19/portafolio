const { Schema, Types, model, Model } = require("mongoose");

const TecnologiesSchema = new Schema(
  {
    name: { type: String },
    image: { type: String },
    tecnologies: { type: String },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("tecnologies", TecnologiesSchema);
