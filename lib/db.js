import mongoose from "mongoose";
import { User } from "../models/userModel";

const connectDB = async () => mongoose.connect();
