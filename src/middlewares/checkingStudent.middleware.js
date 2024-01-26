import Admission from "../models/admission.model.js";
import ApiResponse from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const checkStudent = asyncHandler(async (req, res, next) => {
    console.log(req.body);
  const { rollno } = req.body;
  const foundStudent = await Admission.findOne({ rollno });
  if (foundStudent) {
    console.log(foundStudent);
   return res
      .status(400)
      .json(new ApiResponse(400, { msg: "student already exist" }, "failed"));
  }
  next();
});
export default checkStudent;
