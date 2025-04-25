import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGOODB_URI}/${DB_NAME}`);

        console.log(`\n MongoDB connected !! DB HOST:${mongoose.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection feald", error);
        process.exit(1);
    }
};

export default connectDB;
