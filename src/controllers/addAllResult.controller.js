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
    term,
  ];
  if (arr.some((val) => val==="")) {
    throw new ApiError(400, "fill out all the field");
  }
  const addedResult=await AllResult.create({ pt,
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
    term});
    if(!addedResult){
        return res.status(400).json(new ApiResponse(400,null,"result could not be uplodaed"))
    }
  res.status(201).json(new ApiResponse(200,addedResult,"Result added successfully"))
});
export default addAllResult;
