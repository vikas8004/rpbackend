import { asyncHandler } from "../../utils/asyncHandler.js";
import ApiResponse from "../../utils/ApiResponse.js";
import Teacher from "../../models/teacher/teacher.model.js";

const viewAllTeachers=asyncHandler(async(req,res)=>{
    const foundTeachers=await Teacher.find().sort({fullName:1}).select("-_id -createtAt -updatedAt");
    if(foundTeachers){

        res.status(200).send(new ApiResponse(200,foundTeachers))
    }
    else{
        res.status(400).send(new ApiResponse(400,{message:"internal server error"},"failed"))
    }
})

export default viewAllTeachers;