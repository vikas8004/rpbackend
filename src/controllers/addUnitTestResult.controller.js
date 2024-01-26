import UnitTest from "../models/unitTestResult.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
const addUnitTestResult = asyncHandler(async (req, res) => {
  console.log(req.body);
  const {
    pt,
    drawing,
    gk,
    computer,
    sanskrit,
    socialStudy,
    science,
    math,
    english,
    hindi,
    rollno,
    year,
    schoolName,
    test,
  } = req.body;
  let arr = [
    pt,
    drawing,
    gk,
    computer,
    sanskrit,
    socialStudy,
    science,
    math,
    english,
    hindi,
    rollno,
    year,
    schoolName,
    test,
  ];
  if (arr.some((val) => val === "")) {
    throw new ApiError(400, "fill out all the field");
  }
  const addedResult = await UnitTest.create({
    pt,
    drawing,
    gk,
    computer,
    sanskrit,
    socialStudy,
    science,
    math,
    english,
    hindi,
    rollno,
    year,
    schoolName,
    test,
  });
  if (!addedResult) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "result could not be uplodaed"));
  }
  res
    .status(201)
    .json(new ApiResponse(200, addedResult, "Result added successfully"));
});
export default addUnitTestResult;
