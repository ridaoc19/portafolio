const { Schema, Types, model, Model } = require("mongoose");

const universitySchema = new Schema(
  {
    user_id: { type: Schema.Types.ObjectId, ref: "Login" },
    name: { type: String },
    image: { type: String },
    link: { type: String },
    title_id: [{ type: Schema.Types.ObjectId, ref: "Title" }],
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

const titleSchema = new Schema(
  {
    university_id: { type: Schema.Types.ObjectId, ref: "University" },
    name: { type: String },
    start_date: { type: String },
    end_date: { type: String },
    description: { type: String },
    image: { type: String },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

const University = model("University", universitySchema);
const Title = model("Title", titleSchema);

module.exports = { University, Title };
