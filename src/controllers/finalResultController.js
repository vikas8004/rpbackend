import { asyncHandler } from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import UnitTest from "../models/unitTestResult.model.js";
import AllResult from "../models/allResult.model.js";
import Admission from "../models/admission.model.js";

const finalResult = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { year, rollno, schoolName } = req.body;
  const allTypeResult = await AllResult.find({ year, rollno, schoolName });
  const allUnitTestResult = await UnitTest.find({ year, rollno, schoolName });
  const stuDet = await Admission.findOne({ rollno, year, schoolName }).select("fullName year standard rollno -_id schoolName");
  if (
    allTypeResult.length === 0 ||
    allUnitTestResult.length === 0 ||
    !stuDet
  ) {
    res
      .status(500)
      .send(new ApiResponse(500, { msg: "no result found" }, "failed"));
  } else {
    res
      .status(200)
      .send(new ApiResponse(200, { allTypeResult, allUnitTestResult ,stuDet}));
  }
});

export default finalResult;
