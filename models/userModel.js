import { Schema, Model, Models } from "mongoose";

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    minLength: 2,
    maxLength: 20,
  },
  lastname: {
    type: String,
    required: [true, "Last name is required"],
    minLength: 2,
    maxLength: 20,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    minLength: 2,
    maxLength: 50,
  },
  username: {
    type: String,
    required: [true, "Username is required"],
    minLength: 2,
    maxLength: 20,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: 8,
    maxLength: 20,
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

export const User = mongoose.model("User", userSchema);
