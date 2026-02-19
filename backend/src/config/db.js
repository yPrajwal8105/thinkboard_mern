import mongoose from "mongoose";

export const connectDB = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("Error connecting to database");
    process.exit(1);
  }
};
