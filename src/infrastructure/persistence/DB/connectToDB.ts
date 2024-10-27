import mongoose from "mongoose";
import { MONGO_DB_URI } from "../../../shared/constants/env";

const connectToMongoDB = async () => {
  try {
    if (!MONGO_DB_URI) {
      throw new Error("Missing MONGO_DB_URI environment variable");
    }
    await mongoose.connect(MONGO_DB_URI);
    console.log("Connected to MongoDB");
  } catch (error: any) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

export default connectToMongoDB;
