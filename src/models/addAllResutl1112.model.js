import { Schema, model } from "mongoose";

const allRessult1112Schema = new Schema({
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
  bio: {
    type: Number,
    
  },
  physics: {
    type: Number,
    required: true,
  },
  chemistry: {
    type: Number,
    required: true,
  },
  hinPrac: {
    type: Number,
  },
  engPrac: {
    type: Number,
  },
  mathPrac: {
    type: Number,
  },
  bioPrac: {
    type: Number,
  },
  chemisPrac: {
    type: Number,
  },
  phyPrac: {
    type: Number,
  },
});

const AllResult1112 = model("AllResult1112", allRessult1112Schema);

export default AllResult1112;
