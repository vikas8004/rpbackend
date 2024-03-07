import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import Admin from "../models/registerAsAdmin.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jsonwebtoken from "jsonwebtoken";
const generateToken = async function (userId) {
  try {
    const foundUser = await Admin.findById(userId);
    const accessToken = await foundUser.generateAccessToken();
    return { accessToken };
  } catch (error) {
    throw new ApiError(
      500,
      "something went wrong while generating the access and refresh token"
    );
  }
};
const regitsterAdmin = asyncHandler(async (req, res) => {
  const { userName, password, adminkey } = req.body;
  console.log(req.body);
  if (!userName && !password && !adminkey) {
    throw new ApiError(400, "provide all the necessary details");
  }
  const foundAdmin = await Admin.findOne({ userName });
  if (foundAdmin?.userName) {
    throw new ApiError(400, "admin already exist");
  }
  if (adminkey !== process.env.ADMIN_KEY) {
    throw new ApiError(403, "Invalid Admin Key");
  }
  const registeredAdmin = await Admin.create({ userName, password });
  res
    .status(201)
    .json(new ApiResponse(201, { userName: registeredAdmin.userName }));
});

const loginAdmin = asyncHandler(async (req, res) => {
  const { userName, password } = req.body;
  if (!userName && !password) {
    throw new ApiError(400, "provide all the necessary details");
  }
  const foundUser = await Admin.findOne({ userName });
  if (!foundUser) {
    throw new ApiError(401, "Invalid credentials or user does not exist");
  }
  const isCorrectPassword = await foundUser.checkPassword(password);
  if (!isCorrectPassword) {
    throw new ApiError(401, "Invalid credentials or user does not exist");
  }
  const { accessToken } = await generateToken(foundUser._id);
  const loggedInUser = await Admin.findById(foundUser._id).select("-password");
  // console.log(accessToken);

  const options = {
    httpOnly: true,
    secure: true,
    maxAge: 60 * 60 * 1000,
    sameSite: "none",
  };
  res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .json(
      new ApiResponse(200, {
        message: "Logged in successfully!",
        loggedInUser,
        accessToken,
      })
    );
});

const logoutAdmin = asyncHandler(async (req, res) => {
  const user = await Admin.findById(req.user?._id);

  const options = {
    httpOnly: true,
    secure: true,
    maxAge: 60 * 60 * 1000,
    sameSite: "none",
  };
  return res
    .status(200)
    .clearCookie("accessToken")
    .json(
      new ApiResponse(
        200,
        { status: true },
        `${user.userName} , you are logout successfully`
      )
    );
});
const verifyLogin = asyncHandler(async (req, res) => {
  // console.log(req.cookies);
  const token = req.cookies?.accessToken;
  if (!token) {
    res.status(200).send(new ApiResponse(200, { status: false }));
  } else {
    const decodedDetails = await jsonwebtoken.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET
    );
    console.log(decodedDetails);
    if (!decodedDetails) {
      res
        .status(200)
        .send(
          new ApiResponse(200, { message: "invalid token", status: false })
        );
    } else {
      res
        .status(200)
        .send(
          new ApiResponse(200, {
            message: "user authenticated",
            status: true,
            decodedDetails,
            token,
          })
        );
    }
  }
});
export { regitsterAdmin, loginAdmin, logoutAdmin, verifyLogin };
