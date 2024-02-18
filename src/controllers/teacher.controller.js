import Teacher from "../models/teacher.model.js"
import { asyncHandler } from "../utils/asyncHandler.js";
import uploadImage from "../utils/cloudinary.uploader.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import getDataUri from "../utils/getDataUri.js";
const addTeacher=asyncHandler(async(req,res)=>{
  console.log(req.body);
  
})

export  {addTeacher};
