import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    return true;
  }

  try {
    console.log("process.env.MONGODB_URL", process.env.MONGODB_URL);
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Mongodb connected");
    return true;
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
