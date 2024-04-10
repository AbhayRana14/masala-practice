import mongoose from "mongoose";
import { Flavour } from "../../app/db/models/Flavour";

export const getFlavours = async () => {
  try {
    // Establish MongoDB connection
    await mongoose.connect(process.env.MONGO_URL as string);
    console.log("MongoDB connection established successfully.");

    // Query the Flavour collection
    const res = await Flavour.find({});
    console.log("Found flavours:", res);
    return res;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
