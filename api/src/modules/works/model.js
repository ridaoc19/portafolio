const { Schema, Types, model, Model } = require("mongoose");

const companySchema = new Schema(
  {
    user_id: { type: Schema.Types.ObjectId, ref: "Company" },
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
    link: { type: String },
    start_date: { type: String },
    end_date: { type: String },
    tecnologies: [{ type: Schema.Types.ObjectId, ref: "Technologies" }],
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
    position: { type: Schema.Types.ObjectId, ref: "Position" },
    name: { type: String },
    image: { type: String },
    tecnologies: { type: String },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);

const workSchema = new Schema(
  {
    company: { type: Schema.Types.ObjectId, ref: "Company" },
    position: {type: Schema.Types.ObjectId, ref: "Position"},
    functions: {type: Schema.Types.ObjectId, ref: "Functions"},
    technologies: [{type: Schema.Types.ObjectId, ref: "Technologies"}],
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
const Works = model("Works", workSchema);

module.exports = { Company, Position, Functions, Technologies, Works };
