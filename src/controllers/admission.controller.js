import Admission from "../models/admission.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import uploadImage, { deleteImage } from "../utils/cloudinary.uploader.js";
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

const updateAndPromote = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { schoolName, year, rollno } = req.body;
  const foundStu = await Admission.findOne({ schoolName, year, rollno });
  if (!foundStu) {
    res
      .status(400)
      .send(
        new ApiResponse(400, { message: "Roll no does not exist" }, "failed")
      );
  } else {
    res.status(200).send(new ApiResponse(200, { foundStu }));
  }
});
const updateStu = asyncHandler(async (req, res) => {
  // console.log(req.aadharNo);
  const { image, studentSignature } = req.files;
  const {
    schoolName,
    _id,
    standard,
    fullName,
    rollno,
    regestrationNo,
    year,
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
    image1,
    studentSignature1,
    subjects,
    gender,
  } = req.body;
  const imagePath = image ? getDataUri(image[0]) : null;
  const studentSignaturePath = studentSignature
    ? getDataUri(studentSignature[0])
    : null;
  if (imagePath && studentSignaturePath) {
    const imagePublicId = JSON.parse(image1).public_id;
    const studenSignaturePublicId = JSON.parse(studentSignature1).public_id;
    // console.log(imagePublicId, studenSignaturePublicId);
    const deletedImage = await deleteImage(imagePublicId);
    const deletedStudentSignature = await deleteImage(studenSignaturePublicId);
    console.log(deleteImage, deletedStudentSignature);
    const uploadedImage = await uploadImage(imagePath.content);
    const uploadedStudentSignature = await uploadImage(
      studentSignaturePath.content
    );
    const upImgae = {
      secure_url: uploadedImage.secure_url,
      public_id: uploadedImage.public_id,
    };
    const upStudentSignature = {
      secure_url: uploadedStudentSignature.secure_url,
      public_id: uploadedStudentSignature.public_id,
    };
    const updateStu = await Admission.findByIdAndUpdate(
      _id,
      {
        schoolName,
        standard,
        fullName,
        rollno,
        regestrationNo,
        year,
        fatherName,
        fatherOccupation,
        motherName,
        address,
        category,
        relegion,
        dob,
        lastSchool,
        aadharNo: aadharNo == "null" ? "123456789" : aadharNo,
        mobileNo,
        subjects: [subjects],
        gender,
        image: upImgae,
        studentSignature: upStudentSignature,
      },
      { new: true }
    );
    if (!updateStu) {
      res
        .status(500)
        .send(new ApiResponse(500, { message: "Student could not updated" }));
    } else {
      res.status(201).send(new ApiResponse(200, updateStu));
    }
  } else {
    const updateStu = await Admission.findByIdAndUpdate(
      _id,
      {
        schoolName,
        standard,
        fullName,
        rollno,
        regestrationNo,
        year,
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
        subjects: [subjects],
        gender,
      },
      { new: true }
    );
    if (!updateStu) {
      res
        .status(500)
        .send(new ApiResponse(500, { message: "Student could not updated" }));
    } else {
      res.status(201).send(new ApiResponse(200, updateStu));
    }
  }
});
export { updateAndPromote, updateStu };
export default studentAdmission;
