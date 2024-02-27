import { Schema, model } from "mongoose";

const feeSubmitSchema = new Schema(
  {
    sNo: {
      type: Number,
      required: true,
    },
    admission: {
      type: Number,
    },
    annualFunctionFee: {
      type: Number,
    },
    buildingFee: {
      type: Number,
    },
    computer: {
      type: Number,
    },
    year:{
      type:String,
      required:true
    },
    convenienceFee: {
      type: Number,
    },
    developmentFee: {
      type: Number,
    },
    examinationFee: {
      type: Number,
    },
    other: {
      type: Number,
    },
    rollno: {
      type: String,
      required: true,
    },
    schoolName: {
      type: String,
      required: true,
    },
    tutionFee: {
      type: Number,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const FeeSubmission = model("FeeSubmission", feeSubmitSchema);

export default FeeSubmission;
