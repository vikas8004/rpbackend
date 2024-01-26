import AllResult from "../models/allResult.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
const showAllResult = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { resultType, year, schoolName, rollno } = req.body;
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
              _id: 0,
            },
          },
        ],
      },
    },
  ]);
  if (!foundResult.length) {
    throw new ApiError(400, "no result found");
  }
  return res.status(200).json(new ApiResponse(200, foundResult));
});

export default showAllResult;
