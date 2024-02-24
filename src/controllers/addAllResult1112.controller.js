import { asyncHandler } from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import AllResult1112 from "../models/addAllResutl1112.model.js";
const addAllResult1112 = asyncHandler(async (req, res) => {
  // console.log(req.body);
  const {
    term,
    schoolName,
    year,
    rollno,
    hindi,
    english,
    math,
    bio,
    physics,
    chemistry,
    hinPrac,
    engPrac,
    mathPrac,
    bioPrac,
    chemisPrac,
    phyPrac,
  } = req.body;
  const foundRes = await AllResult1112.findOne({
    term,
    schoolName,
    year,
    rollno,
  });
  if (foundRes) {
    res
      .status(500)
      .send(new ApiResponse(500, { message: "Result already exist" }, "error"));
  } else {
    const addedRes = await AllResult1112.create({
      term,
      schoolName,
      year,
      rollno,
      hindi,
      english,
      math,
      bio,
      physics,
      chemistry,
      hinPrac,
      engPrac,
      mathPrac,
      bioPrac,
      chemisPrac,
      phyPrac,
    });
    res.status(200).send(new ApiResponse(200, addedRes));
  }
});

export default addAllResult1112;
