import jsonwebtoken from "jsonwebtoken";
import { asyncHandler } from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import Admin from "../models/registerAsAdmin.model.js";

const verifyToken = asyncHandler(async (req, _, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization").replace("Bearer ", "");
    if (!token) {
      throw new ApiError(401, "unauthorized request");
    }

    const decodedInfo = jsonwebtoken.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET
    );
    const user = await Admin.findById(decodedInfo?.id).select("-password");

    if (!user) {
      throw new ApiError(401, "invalid access token");
    }
    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(401, error?.message || "invalid access token");
  }
});

export default verifyToken;
