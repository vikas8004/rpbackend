import { asyncHandler } from "../../utils/asyncHandler.js";
import ApiResponse from "../../utils/ApiResponse.js";
import ReceitpNo from "../../models/fee/receiptNo.model.js";
import Admission from "../../models/admission.model.js";
import FeeSubmission from "../../models/fee/feeSubmit.model.js";

const submittedFee = asyncHandler(async (req, res) => {
  //   console.log(req.body);
  const {
    schoolName,
    rollno,
    admission,
    tutionFee,
    convenienceFee,
    developmentFee,
    examinationFee,
    annualFunctionFee,
    buildingFee,
    computer,
    other,
    year
  } = req.body;

  const feeRecordArr = [
    admission,
    tutionFee,
    convenienceFee,
    developmentFee,
    examinationFee,
    annualFunctionFee,
    buildingFee,
    computer,
    other,
  ];
  //   console.log(feeRecordArr);
  const foundStu = await Admission.findOne({ rollno, schoolName,year }).select(
    "fullName -_id standard"
  );
  if (!foundStu) {
    res
      .status(500)
      .send(
        new ApiResponse(500, { message: "Roll no does not exist" }, "failed")
      );
  } else {
    let total = 0;
    feeRecordArr.forEach((element) => {
      if (element) {
        total += element;
      }
    });
    //   console.log(total);
    const foundSno = await ReceitpNo.findById("65dd52efd5c6cec427d669cd");
    const newSno = await ReceitpNo.findByIdAndUpdate(
      "65dd52efd5c6cec427d669cd",
      { recNo: foundSno.recNo + 1 },
      { new: true }
    );
    //   console.log(newSno);
    const submittedFeeRes = await FeeSubmission.create({
      schoolName,
      rollno,
      admission,
      tutionFee,
      convenienceFee,
      developmentFee,
      examinationFee,
      annualFunctionFee,
      buildingFee,
      computer,
      year,
      other,
      total,
      sNo: newSno.recNo,
    });
    res.status(200).send(new ApiResponse(200, { submittedFeeRes, foundStu }));
  }
});

export { submittedFee };
