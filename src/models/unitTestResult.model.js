import { Schema, model } from "mongoose";

const unitTestResultSchema = new Schema(
  {
    test: {
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
      type: Number,
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
      default: 20,
    },
  },
  { timestamps: true }
);

const UnitTest = model("UnitTest", unitTestResultSchema);

export default UnitTest;
