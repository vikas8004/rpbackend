import { Schema, model } from "mongoose";

const addAllResult910Schema = new Schema({
  term: {
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
  hinPrac: {
    type: Number,
   
  },
  engPrac: {
    type: Number,
    
  },
  mathPrac: {
    
  },
  sciPrac: {
    type: Number,
    
  },
  sstPrac: {
    type: Number,
   
  },
  drawPrac: {
    type: Number,
    
  },
  hsPrac: {
    type: Number,
  },
});

const AllResult910 = model("AllResult910", addAllResult910Schema);
export default AllResult910;
