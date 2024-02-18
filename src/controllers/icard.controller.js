import { asyncHandler } from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import Admission from "../models/admission.model.js";
const ViewIdCard = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { schoolName, standard, rollno } = req.body;
  const foundStu = await Admission.findOne({ schoolName, standard, rollno }).select("fullName gender rollno standard fatherName mobileNo address -_id schoolName image");
  if (!foundStu) {
    res.status(401).json(new ApiResponse(500, `No Student Found`));
  }
  res.status(200).json(new ApiResponse(200, foundStu));
});

export { ViewIdCard };
