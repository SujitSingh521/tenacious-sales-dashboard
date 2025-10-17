import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/tenacious_sales");
    console.log("MongoDB Connected ✅");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
