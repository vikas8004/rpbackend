import Teacher from "../../models/teacher/teacher.model.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import uploadImage from "../../utils/cloudinary.uploader.js";
import ApiResponse from "../../utils/ApiResponse.js";
import getDataUri from "../../utils/getDataUri.js";
const addTeacher = asyncHandler(async (req, res) => {
  // console.log(req.body, req.file);
  try {
    const imageFile = getDataUri(req.file);
    const uploadedImage = await uploadImage(imageFile.content);
    const image = {
      secure_url: uploadedImage.secure_url,
      public_id: uploadedImage.public_id,
    };
    // console.log(uploadedImage);
    const regTeacher = await Teacher.create({ ...req.body,image });
    res.status(200).send(new ApiResponse(200, regTeacher));
  } catch (error) {
    res
      .status(500)
      .send(new ApiResponse(200, { message: "Regestration failed" }));
  }
});

export { addTeacher };
