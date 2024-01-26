import { Schema, model } from "mongoose";
const admissionSchema = new Schema(
  {
    schoolName: {
      type: String,
      required: true,
    },
    standard: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    rollno: {
      type: String,
      required: true,
    },
    regestrationNo: {
      type: String,
    },
    fatherName: {
      type: String,
      required: true,
    },
    fatherOccupation: {
      type: String,
      required: true,
    },
    motherName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    caste: {
      type: String,
      required: true,
    },
    relegion: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    lastSchool: {
      type: String,
      required: true,
    },
    aadharNo: {
      type: Number,
      required: true,
    },
    mobileNo: {
      type: Number,
      required: true,
    },
    image: {
      public_id: {
        type: String,
        required: true,
      },
      secure_url: {
        type: String,
        required: true,
      },
    },
    studentSignature: {
      public_id: {
        type: String,
        required: true,
      },
      secure_url: {
        type: String,
        required: true,
      },
    },
    subjects: [
      {
        type: String,
        required: true,
      },
    ],
    gender: {
      type: String,
      required: true,
    },
    year:{
      type:Number,
      default:new Date().getFullYear()
    }
  },
  { timestamps: true }
);

const Admission = model("Admission", admissionSchema);
export default Admission;
