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

  const foundRes = await UnitTest.findOne({ rollno, schoolName, test, year });
  if (foundRes) {
    res
      .status(500)
      .send(new ApiResponse(500, { message: "Result already exist" }));
  } else {
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
    res.status(201).json(new ApiResponse(200, addedResult));
  }
});
export default addUnitTestResult;
