import Admission from "../models/admission.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const showAdmitCard = asyncHandler(async (req, res) => {
  const { admitCardType, year, rollno, schoolName } = req.body;
  console.log(req.body);
  const foundStu = await Admission.findOne({ rollno, schoolName });
  if (!foundStu) {
    return res.status(400).json(new ApiResponse(400, {}, "failed"));
  }
  const { image, standard, fatherName, fullName, gender, dob } = foundStu;

  return res.status(200).json(
    new ApiResponse(200, {
      fullName,
      image,
      standard,
      dob,
      fatherName,
      gender,
      rollno,
      schoolName,
      year,
      admitCardType,
    })
  );
});

export default showAdmitCard;
