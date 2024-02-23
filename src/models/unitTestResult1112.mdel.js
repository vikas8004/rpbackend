import { Schema, model } from "mongoose";

const unitTestResult112schema = new Schema({
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
  bio: {
    type: Number,
  },
  chemistry: {
    type: Number,
    required: true,
  },
  physics: {
    type: Number,
    required: true,
  },
});

const UnitTest1112 = model("UnitTest1112", unitTestResult112schema);

export default UnitTest1112;