import { asyncHandler } from "../utils/asyncHandler.js";
import Admission from "../models/admission.model.js";
import ApiResponse from "../utils/ApiResponse.js";
import Teacher from "../models/teacher/teacher.model.js";
const fetchStudentDetails = asyncHandler(async (req, res) => {
  // console.log(req.body);
  const { schoolName, standard, year } = req.body;
  const foundStu = await Admission.find({ schoolName, standard, year }).select(
    "fullName rollno standard fatherName motherName image studentSignature category subjects dob"
  );

  if (!foundStu || foundStu.length === 0) {
    res.status(404).json(new ApiResponse(404, "No records found", "failed"));
  } else {
    res.status(200).json(new ApiResponse(200, foundStu));
  }
});

const groupWiseStu = asyncHandler(async (req, res) => {
  const groupedData = await Admission.aggregate([
    {
      $group: {
        _id: "$schoolName",
        count: { $sum: 1 },
      },
    },
  ]);

  const noOfTeachers=await Teacher.find().countDocuments()
  res.status(200).json(new ApiResponse(200, {groupedData,noOfTeachers}));

});

export { fetchStudentDetails, groupWiseStu };
