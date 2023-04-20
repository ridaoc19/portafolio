const { Schema, Types, model, Model } = require("mongoose");

const loginSchema = new Schema(
  {

    location_id: [{ type: Schema.Types.ObjectId, ref: "Location" }],
    user_id: { type: String },
    name: { type: String },
    email: { type: String },
    picture: { type: String },
    company: { type: String },
    company_id: [{ type: Schema.Types.ObjectId, ref: "Company" }],

  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Login = model("Login", loginSchema);
module.exports = { Login }
