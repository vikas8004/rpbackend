import AllResult from "../models/allResult.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import AllResult910 from "../models/addAllResult910.model.js";
import AllResult1112 from "../models/addAllResutl1112.model.js";
import Admission from "../models/admission.model.js";
const showAllResult = asyncHandler(async (req, res) => {
  const classes1to8 = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const classes9to10 = ["9", "10"];
  const classes11to12 = ["11", "12"];
  console.log(req.body);
  const { resultType, year, schoolName, rollno } = req.body;
  const studentData = await Admission.findOne({
    schoolName,
    rollno,
    year,
  }).select("fullName image standard -_id");
  if (!studentData) {
    res
      .status(500)
      .send(
        new ApiResponse(500, { message: "Roll no does not exist" }, "error")
      );
  } else {
    if (classes1to8.includes(studentData.standard)) {
      const foundResult = await AllResult.aggregate([
        {
          $match: {
            term: resultType,
            year,
            schoolName,
            rollno,
          },
        },
        {
          $project: {
            _id: 0,
          },
        },
        {
          $lookup: {
            from: "admissions",
            localField: "rollno",
            foreignField: "rollno",
            as: "StudentInfo",
            pipeline: [
              {
                $project: {
                  fullName: 1,
                  image: 1,
                  standard: 1,
                  _id: 0,
                },
              },
            ],
          },
        },
      ]);
      if (!foundResult.length) {
        res
          .status(404)
          .send(new ApiResponse(404, { message: "No result found" }, "error"));
      }
      return res.status(200).json(new ApiResponse(200, foundResult));
    } else if (classes9to10.includes(studentData.standard)) {
      const foundResult = await AllResult910.aggregate([
        {
          $match: {
            term: resultType,
            year,
            schoolName,
            rollno,
          },
        },
        {
          $project: {
            _id: 0,
          },
        },
        {
          $lookup: {
            from: "admissions",
            localField: "rollno",
            foreignField: "rollno",
            as: "StudentInfo",
            pipeline: [
              {
                $project: {
                  fullName: 1,
                  image: 1,
                  standard: 1,
                  _id: 0,
                },
              },
            ],
          },
        },
      ]);
      if (!foundResult.length) {
        res
          .status(404)
          .send(new ApiResponse(404, { message: "No result found" }, "error"));
      }
      return res.status(200).json(new ApiResponse(200, foundResult));
    } else if (classes11to12.includes(studentData.standard)) {
      const foundResult = await AllResult1112.aggregate([
        {
          $match: {
            term: resultType,
            year,
            schoolName,
            rollno,
          },
        },
        {
          $project: {
            _id: 0,
          },
        },
        {
          $lookup: {
            from: "admissions",
            localField: "rollno",
            foreignField: "rollno",
            as: "StudentInfo",
            pipeline: [
              {
                $project: {
                  fullName: 1,
                  image: 1,
                  standard: 1,
                  _id: 0,
                },
              },
            ],
          },
        },
      ]);
      if (!foundResult.length) {
        res
          .status(404)
          .send(new ApiResponse(404, { message: "No result found" }, "error"));
      }
      return res.status(200).json(new ApiResponse(200, foundResult));
    }
  }
});

export default showAllResult;
