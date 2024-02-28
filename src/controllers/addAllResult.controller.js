import AllResult from "../models/allResult.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
const addAllResult = asyncHandler(async (req, res) => {
  // console.log(req.body);
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
    term,
  } = req.body;

  const foundRes = await AllResult.findOne({ rollno, schoolName, term, year });
  if (foundRes) {
    res
      .status(500)
      .send(new ApiResponse(500, { message: "Result already exist" }));
  } else {
    const addedResult = await AllResult.create({
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
      term,
    });
    if (!addedResult) {
      return res
        .status(400)
        .json(new ApiResponse(400, null, "result could not be uplodaed"));
    }
    res.status(201).json(new ApiResponse(200, addedResult));
  }
});
export default addAllResult;
