import { asyncHandler } from "../utils/asyncHandler.js";
import Admission from "../models/admission.model.js";
import ApiResponse from "../utils/ApiResponse.js";

const frontPage = asyncHandler(async (req, res) => {
//   console.log(req.body);
  const { year, rollno, schoolName } = req.body;
  const foundDet = await Admission.findOne({ year, rollno, schoolName }).select("fullName fatherName motherName standard rollno -_id dob mobileNo schoolName year");
  
  if (!foundDet) {
    res.status(404).send(new ApiResponse(404, "no record found", "failed"));
  } else {
    console.log(foundDet);
    res.status(200).send(new ApiResponse(200, foundDet));
  }
});

export default frontPage;
