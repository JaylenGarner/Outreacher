import { Schema, model, models } from "mongoose";
import User from "./User";

const ApplicationSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    index: true,
  },
  company: {
    type: String,
    maxLength: [100, "Company name must not exceed 80 characters"],
    required: [true, "Company name is required"],
  },
  position: {
    type: String,
    maxLength: [100, "Position title must not exceed 80 characters"],
    required: [true, "Position title is required"],
  },
  posting: {
    type: String,
    maxLength: [2048, "Posting URL must not exceed 2048 characters"],
  },
  salary: {
    type: String,
    maxLength: [50, "Salary range must not exceed 50 characters"],
  },
  location: {
    type: String,
    maxLength: [500, "Location must not exceed 500 characters"],
  },
  notes: {
    type: String,
    maxLength: [
      2000,
      "Notes for this application must not exceed 2000 characters",
    ],
  },
  status: {
    type: String,
    enum: [
      "Queue",
      "Applied",
      "Interview",
      "Coding Challenge",
      "No Response",
      "Rejected",
      "Offer",
      "Hired",
    ],
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});

ApplicationSchema.pre("save", function (next) {
  this.updatedAt = new Date();
  next();
});

const Application =
  models.Application || model("Application", ApplicationSchema);

export default Application;
