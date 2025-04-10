import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    return true;
  }

  try {
    console.log("process.env.MONGODB_URL", process.env.MONGODB_URL);
    console.log("GMAIL_USER:", process.env.GMAIL_USER);
    console.log("GMAIL_PASS:", process.env.GMAIL_PASS);
    console.log("GMAIL_RECEIVER:", process.env.GMAIL_RECEIVER);
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Mongodb connected");
    return true;
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
