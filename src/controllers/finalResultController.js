import { asyncHandler } from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import UnitTest from "../models/unitTestResult.model.js";
import AllResult from "../models/allResult.model.js";
import Admission from "../models/admission.model.js";
import AllResult910 from "../models/addAllResult910.model.js";
import UnitTest910 from "../models/unitTestResult910.model.js";
import AllResult1112 from "../models/addAllResutl1112.model.js";
import UnitTest1112 from "../models/unitTestResult1112.mdel.js";
const finalResult = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { year, rollno, schoolName } = req.body;
  const classes1to8 = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const classes9to10 = ["9"];
  const classes11to12 = ["11"];
  const stuDet = await Admission.findOne({ rollno, year, schoolName }).select(
    "fullName year standard rollno -_id schoolName"
  );
  // console.log(stuDet);
  if (!stuDet) {
    res
      .status(500)
      .send(
        new ApiResponse(500, { message: "Roll no does not exist" }, "failed")
      );
  } else {
    if (classes1to8.includes(stuDet.standard)) {
      const allTypeResult = await AllResult.find({ year, rollno, schoolName });
      const allUnitTestResult = await UnitTest.find({
        year,
        rollno,
        schoolName,
      });

      // console.log(stuDet,allUnitTestResult,allTypeResult);
      if (allTypeResult.length === 0 || allUnitTestResult.length === 0) {
        res
          .status(500)
          .send(new ApiResponse(500, { message: "no result found" }, "failed"));
      } else {
        res
          .status(200)
          .send(
            new ApiResponse(200, { allTypeResult, allUnitTestResult, stuDet })
          );
      }
    } else if (classes9to10.includes(stuDet.standard)) {
      const allTypeResult = await AllResult910.find({
        year,
        rollno,
        schoolName,
      });
      const allUnitTestResult = await UnitTest910.find({
        year,
        rollno,
        schoolName,
      });
      // console.log(stuDet,allUnitTestResult,allTypeResult);
      if (allTypeResult.length === 0 || allUnitTestResult.length === 0) {
        res
          .status(500)
          .send(new ApiResponse(500, { message: "no result found" }, "failed"));
      } else {
        res
          .status(200)
          .send(
            new ApiResponse(200, { allTypeResult, allUnitTestResult, stuDet })
          );
      }
    }
    else if (classes11to12.includes(stuDet.standard)) {
      const allTypeResult = await AllResult1112.find({
        year,
        rollno,
        schoolName,
      });
      const allUnitTestResult = await UnitTest1112.find({
        year,
        rollno,
        schoolName,
      });
      // console.log(stuDet,allUnitTestResult,allTypeResult);
      if (allTypeResult.length === 0 || allUnitTestResult.length === 0) {
        res
          .status(500)
          .send(new ApiResponse(500, { message: "no result found" }, "failed"));
      } else {
        res
          .status(200)
          .send(
            new ApiResponse(200, { allTypeResult, allUnitTestResult, stuDet })
          );
      }
    } else {
      res
        .status(500)
        .send(new ApiResponse(500, { message: "no result found" }, "failed"));
    }
  }
});

export default finalResult;
