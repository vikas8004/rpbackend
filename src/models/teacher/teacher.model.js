import { Schema, model } from "mongoose";
const teacherSchema = new Schema(
  {
    schoolName: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    fatherName: {
      type: String,
      required: true,
    },
    tid: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    aadharNo: {
      type: Number,
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
    subjects: [
      {
        type: String,
      },
    ],
    gender: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    joiningDate: {
      required: true,
      type: Date,
    },
  },
  { timestamps: true }
);

const Teacher = model("Teacher", teacherSchema);
export default Teacher;
