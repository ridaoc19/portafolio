const { Schema, Types, model, Model } = require("mongoose");

const WorksSchema = new Schema(
  {
    company: { type: String },
    image: { type: String },
    description: { type: String },
    link: { type: String },
    start_date: { type: String },
    end_date: { type: String },
    position: [
      {
        name: { type: String },
        start_date: { type: String },
        end_date: { type: String },
        function: [
          {
            name: { type: String },
            link: { type: String },
            start_date: { type: String },
            end_date: { type: String },
            tecnologies: [],
            repository: { type: String },
            tasks: [{ type: String }],
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("works", WorksSchema);
