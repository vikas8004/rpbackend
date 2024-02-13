import Admission from "../models/admission.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import uploadImage from "../utils/cloudinary.uploader.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";

const studentAdmission = asyncHandler(async (req, res) => {
  // console.log(req.body);

  const {
    schoolName,
    standard,
    fullName,
    rollno,
    regestrationNo,
    fatherName,
    fatherOccupation,
    motherName,
    address,
    caste,
    relegion,
    dob,
    lastSchool,
    aadharNo,
    mobileNo,
    subjects,
    gender,
  } = req.body;
  const imagePath = req.files.image[0].path;
  const studentSignaturePath = req.files.studentSignature[0].path;
  const uploadedImage = await uploadImage(imagePath);
  const uploadedStudentSignature = await uploadImage(studentSignaturePath);
  const image = {
    public_id: uploadedImage.public_id,
    secure_url: uploadedImage.secure_url,
  };
  const studentSignature = {
    public_id: uploadedStudentSignature.public_id,
    secure_url: uploadedStudentSignature.secure_url,
  };
  const registeredStudent = await Admission.create({
    schoolName,
    standard,
    fullName,
    rollno,
    regestrationNo,
    fatherName,
    fatherOccupation,
    motherName,
    address,
    caste,
    relegion,
    dob,
    lastSchool,
    aadharNo,
    mobileNo,
    subjects,
    gender,
    image,
    studentSignature,
  });

  return res.status(201).json(new ApiResponse(200, registeredStudent));
});

export default studentAdmission;
