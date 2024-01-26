import mongoose from "mongoose"
import ApiError from "../utils/ApiError.js";
const connect = async () => {
  try {
    const con = await mongoose.connect(process.env.MONOGOURI);
    if (con) {
      console.log("connection to database is successful");
    }
  } catch (error) {
    throw new ApiError(500,error.message)
  }
};

export default connect;