import { Schema, model } from "mongoose";

const unitTestResultModel910 = new Schema({
  test: {
    type: String,
    required: true,
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
  },
  science: {
    type: Number,
    required: true,
  },
  socialStudy: {
    type: Number,
    required: true,
  },
  drawing: {
    type: Number,
    required: true,
  },
  homeScience: {
    type: Number,
  },
});

const UnitTest910 = model("UnitTest910", unitTestResultModel910);

export default UnitTest910;
