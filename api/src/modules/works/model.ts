import { Schema, Types, model, Model } from "mongoose";
import { WorksType } from "./interfaces";

const WorksSchema = new Schema<WorksType>(
  {
    works: [Schema.Types.Mixed],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("works", WorksSchema);
