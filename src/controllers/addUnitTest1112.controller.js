import { asyncHandler } from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import UnitTest1112 from "../models/unitTestResult1112.mdel.js";

const addUnitTestResult1112 = asyncHandler(async (req, res) => {
  console.log(req.body);
  const {
    test,
    schoolName,
    year,
    rollno,
    hindi,
    english,
    math,
    bio,
    chemistry,
    physics,
  } = req.body;
  const foundRes = await UnitTest1112.findOne({
    test,
    schoolName,
    year,
    rollno,
  });
  if(foundRes){
    res.status(500).send(new ApiResponse(500,{message:"result already exist"},"error"))
  }
 else{
  const addedRes=await UnitTest1112.create({test,
    schoolName,
    year,
    rollno,
    hindi,
    english,
    math,
    bio,
    chemistry,
    physics,})
  res.status(200).send(new ApiResponse(200, addedRes));
 }
});

export default addUnitTestResult1112;
