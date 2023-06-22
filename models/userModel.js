import { Schema, Model, Models } from "mongoose";
import { isEmail } from "validator";

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    maxLength: [30, "First name must not exceed 30 characters"],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
    maxLength: [30, "Last name must not exceed 30 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email is in use"],
    validate: [isEmail, "Invalid email"],
    maxLength: [50, "Email must not exceed 50 characters"],
  },
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: [true, "Username is in use"],
    minLength: [2, "Username must be at least 2 characters"],
    maxLength: [20, "Username must not exceed 20 characters"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: [8, "Password must be at least 8 characters"],
    maxLength: [20, "Password must not exceed 20 characters"],
  },
  applications: [
    {
      type: Schema.Types.ObjectId,
      ref: "Application",
    },
  ],
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

// export const User = mongoose.model("User", userSchema);
