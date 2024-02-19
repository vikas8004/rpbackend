import { asyncHandler } from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import Admission from "../models/admission.model.js";

const showHomeStudentDetails = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { year, schoolName, rollno } = req.body;
  const student = await Admission.findOne({ year, schoolName, rollno }).select(
    "-_id schoolName fullName rollno fatherName dob address subjects image"
  );
  if (!student) {
    res.json({ code: 401, msg: "no record found", status: "failed" });
  }
  res.status(200).json(new ApiResponse(200, student));
});

export { showHomeStudentDetails };
