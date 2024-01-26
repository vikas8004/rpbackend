import { Schema, model } from "mongoose";

const AllResultSchema = new Schema(
  {
    term: {
      type: String,
      required: "true",
    },
    schoolName: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    rollno: {
      type: String,
      required: true,
    },
    hindi: {
      type: Number,
      required: true,
    },
    english: {
      type: Number,
      required: true,
    },
    math: {
      type: Number,
      required: true,
    },
    science: {
      type: Number,
      required: true,
    },
    socialStudy: {
      type: Number,
      required: true,
    },
    sanskrit: {
      type: Number,
      required: true,
    },
    computer: {
      type: Number,
      required: true,
    },
    gk: {
      type: Number,
      required: true,
    },
    drawing: {
      type: Number,
      required: true,
    },
    pt: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      default: 50,
    },
  },
  { timestamps: true }
);

const AllResult = model("AllResult", AllResultSchema);

export default AllResult;
