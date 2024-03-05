import { asyncHandler } from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import Admission from "../models/admission.model.js";
import UnitTest from "../models/unitTestResult.model.js";
import UnitTest910 from "../models/unitTestResult910.model.js";
import UnitTest1112 from "../models/unitTestResult1112.mdel.js";

const unitTestResultAll = asyncHandler(async (req, res) => {
  //   console.log(req.body);
  const classes1to8 = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const classes9to10 = ["9", "10"];
  const classes11to12 = ["11", "12"];
  const { rollno, schoolName, year, test } = req.body;
  const foundStu = await Admission.findOne({ rollno, schoolName, year });
  if (!foundStu) {
    res
      .status(400)
      .send(new ApiResponse(400, { message: "Roll no does not exist" }));
  } else {
    if (classes1to8.includes(foundStu.standard)) {
      const result = await UnitTest.findOne({ rollno, schoolName, year, test });
      if (!result) {
        res
          .status(400)
          .send(new ApiResponse(400, { message: "No result found" }));
      } else {
        res.status(200).send(new ApiResponse(200, { foundStu, result }));
      }
    } else if (classes9to10.includes(foundStu.standard)) {
      const result = await UnitTest910.findOne({
        rollno,
        schoolName,
        year,
        test,
      });
      if (!result) {
        res
          .status(400)
          .send(new ApiResponse(400, { message: "No result found" }));
      } else {
        res.status(200).send(new ApiResponse(200, { foundStu, result }));
      }
    } else if (classes11to12.includes(foundStu.standard)) {
      const result = await UnitTest1112.findOne({
        rollno,
        schoolName,
        year,
        test,
      });
      if (!result) {
        res
          .status(400)
          .send(new ApiResponse(400, { message: "No result found" }));
      } else {
        res.status(200).send(new ApiResponse(200, { foundStu, result }));
      }
    } else {
      res
        .status(400)
        .send(new ApiResponse(400, { message: "No result found" }));
    }
  }
});

export default unitTestResultAll;
