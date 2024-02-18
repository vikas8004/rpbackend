import Admission from "../models/admission.model.js";
import ApiResponse from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const PrintAdmitCard = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { schoolName, standard, term } = req.body;
  const foundedRes = await Admission.find({ schoolName, standard }).select(
    "schoolName standard fullName rollno fatherName gender dob image -_id year"
  );
  if(foundedRes.length==0){
    res.status(401).json(new ApiResponse(401,"no record found","failed"))
  }
  res.status(200).json(new ApiResponse(200, {foundedRes,term}));
});

export { PrintAdmitCard };
