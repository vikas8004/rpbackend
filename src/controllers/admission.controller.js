import Admission from "../models/admission.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import uploadImage from "../utils/cloudinary.uploader.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import getDataUri from "../utils/getDataUri.js";

const studentAdmission = asyncHandler(async (req, res) => {
  // console.log(req.files);

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
    category,
    relegion,
    dob,
    lastSchool,
    aadharNo,
    mobileNo,
    subjects,
    gender,
    year,
  } = req.body;
  const foundStu = await Admission.findOne({ rollno, schoolName });
  if (foundStu) {
    res
      .status(500)
      .send(
        new ApiResponse(500, { message: "Student already exist" }, "failed")
      );
  } else {
    const imagePath = getDataUri(req.files.image[0]);
    const studentSignaturePath = getDataUri(req.files.studentSignature[0]);

    const uploadedImage = await uploadImage(imagePath.content);
    const uploadedStudentSignature = await uploadImage(
      studentSignaturePath.content
    );
    // console.log(uploadedImage, uploadedStudentSignature);
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
      category,
      relegion,
      dob,
      lastSchool,
      aadharNo,
      mobileNo,
      subjects,
      gender,
      image,
      studentSignature,
      year,
    });

    return res.status(201).json(new ApiResponse(200, registeredStudent));
  }
});

export default studentAdmission;
