const { Schema, Types, model, Model } = require("mongoose");

const companySchema = new Schema(
  {
    user_id: { type: Schema.Types.ObjectId, ref: "Login" },
    name: { type: String },
    image: { type: String },
    description: { type: String },
    link: { type: String },
    start_date: { type: String },
    end_date: { type: String },
    position: [{ type: Schema.Types.ObjectId, ref: "Position" }],
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

const positionSchema = Schema(
  {
    company: { type: Schema.Types.ObjectId, ref: "Company" },
    name: { type: String },
    start_date: { type: String },
    end_date: { type: String },
    functions: [{ type: Schema.Types.ObjectId, ref: "Functions" }],
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

const functionsSchema = Schema(
  {
    company: { type: Schema.Types.ObjectId, ref: "Company" },
    position: { type: Schema.Types.ObjectId, ref: "Position" },
    name: { type: String },
    image: { type: String },
    link: { type: String },
    start_date: { type: String },
    end_date: { type: String },
    technologies: [{ type: Schema.Types.ObjectId, ref: "Technologies" }],
    repository: { type: String },
    tasks: [{ type: String }],
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

const technologiesSchema = new Schema(
  {
    user_id: { type: Schema.Types.ObjectId, ref: "Login" },
    position: { type: Schema.Types.ObjectId, ref: "Position" },
    name: { type: String },
    image: { type: String },
    technologies: { type: String },
    percentage: { type: Number }
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

const Company = model("Company", companySchema);
const Position = model("Position", positionSchema);
const Functions = model("Functions", functionsSchema);
const Technologies = model("Technologies", technologiesSchema);

module.exports = { Company, Position, Functions, Technologies };
