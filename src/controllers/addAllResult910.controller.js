import { asyncHandler } from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import AllResult910 from "../models/addAllResult910.model.js";

const addAllResult910 = asyncHandler(async (req, res) => {
//   console.log(req.body);
  const {
    year,
    rollno,
    hindi,
    english,
    math,
    science,
    socialStudy,
    drawing,
    homeScience,
    hinPrac,
    engPrac,
    mathPrac,
    sciPrac,
    sstPrac,
    drawPrac,
    hsPrac,
    term,
    schoolName,
  } = req.body;
  const foundres = await AllResult910.findOne({ term, schoolName, rollno, year });
//   console.log(foundres);
  if (foundres) {
    res
      .status(500)
      .send(new ApiResponse(500, { message: "result aready exist" }, "error"));
  } else {
    const addedRes = await AllResult910.create({
      year,
      rollno,
      hindi,
      english,
      math,
      science,
      socialStudy,
      drawing,
      homeScience,
      hinPrac,
      engPrac,
      mathPrac,
      sciPrac,
      sstPrac,
      drawPrac,
      hsPrac,
      term,
      schoolName,
    });
    res.status(201).send(new ApiResponse(201, addedRes));
  }
});

export default addAllResult910;
