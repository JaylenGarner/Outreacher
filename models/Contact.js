import { Schema, model, models } from "mongoose";
import User from "./User";
import Application from "./Application";

const ContactSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    index: true,
  },
  application: {
    type: Schema.Types.ObjectId,
    ref: "Application",
    index: true,
  },
  name: {
    type: String,
    maxLength: [100, "Name must not exceed 80 characters"],
    required: [true, "Contact name is required"],
  },
  title: {
    type: String,
    maxLength: [100, "Title must not exceed 80 characters"],
  },
  email: {
    type: String,
    maxLength: [100, "Email must not exceed 80 characters"],
  },
  number: {
    type: String,
    maxLength: [15, "Phone number must not exceed 15 characters"],
  },
  linkedIn: {
    type: String,
    maxLength: [2048, "LinkedIn URL must not exceed 2048 characters"],
  },
  notes: {
    type: String,
    maxLength: [2000, "Notes for this contact must not exceed 2000 characters"],
  },
  outreachStage: {
    type: String,
    enum: [
      "Initial Outreach",
      "Follow Up",
      "Final Follow Up",
      "Correspondence",
    ],
  },
  outreachDate: {
    type: Date,
    default: null,
  },
  nextActionDate: {
    type: Date,
    default: null,
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

const Contact = models.Contact || model("Contact", ContactSchema);

export default Contact;
