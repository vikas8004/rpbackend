import { asyncHandler } from "../utils/asyncHandler.js";

import ApiResponse from "../utils/ApiResponse.js";
import UnitTest910 from "../models/unitTestResult910.model.js";
const addUnitTestResult910 = asyncHandler(async (req, res) => {
  // console.log(req.body);
  const {
    test,
    schoolName,
    year,
    rollno,
    hindi,
    english,
    math,
    science,
    socialStudy,
    drawing,
    homeScience,
  } = req.body;
  const foundRes = await UnitTest910.findOne({
    test,
    schoolName,
    year,
    rollno,
  });
// console.log(foundRes);
  if (foundRes) {
    res
      .status(500)
      .send(new ApiResponse(500, { message: "result already exist" }));
  } else {
    const addedRes = await UnitTest910.create({
      test,
      schoolName,
      year,
      rollno,
      hindi,
      english,
      math,
      science,
      socialStudy,
      drawing,
      homeScience,
    });
    res.status(200).send(new ApiResponse(200, addedRes));
  }
});

export default addUnitTestResult910;
