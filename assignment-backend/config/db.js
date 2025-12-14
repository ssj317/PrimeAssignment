import mongoose from "mongoose";
import User from "../models/User.js";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    const adminExists = await User.findOne({ role: "admin" });

    if (!adminExists) {
      await User.create({
        name: "Admin",
        email: "admin@test.com",
        password: "admin123",
        role: "admin"
      });

      console.log(" Admin user seeded");
    } else {
      console.log(" Admin user already exists");
    }

  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

export default connectDB;
