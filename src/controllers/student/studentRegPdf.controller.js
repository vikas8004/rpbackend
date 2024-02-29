import { asyncHandler } from "../../utils/asyncHandler.js";
import ApiResponse from "../../utils/ApiResponse.js";
import Admission from "../../models/admission.model.js";

const printAdmissionFormPdf = asyncHandler(async (req, res) => {
  // console.log(req.body);
  const { rollno, schoolName, year } = req.body;
  const foundStu = await Admission.findOne({ rollno, year, schoolName });
  if (!foundStu) {
    res
      .status(400)
      .send(
        new ApiResponse(400, { message: "Roll no does not exist" }, "failed")
      );
  } else {
    res.status(200).send(new ApiResponse(200, foundStu));
  }
});

export default printAdmissionFormPdf;
