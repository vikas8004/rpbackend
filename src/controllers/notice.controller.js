import { Notice } from "../models/notice.model.js";

import { asyncHandler } from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

const setNotice = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { notice } = req.body;
  const noticeRes = await Notice.create({ notice });
  if (!noticeRes) {
    res.status(404).send(new ApiResponse(404, "can not set notice", "failed"));
  } else {
    res.status(201).send(new ApiResponse(200, noticeRes));
  }
});
const getNotice = asyncHandler(async (req, res) => {
  try {
    const noticeRes = await Notice.find().select("notice");
    if (noticeRes.length === 0) {
      res.status(200).send(new ApiResponse(200, [], "warning"));
    } else {
      res.status(200).send(new ApiResponse(200, noticeRes));
    }
  } catch (error) {
    res.status(500).send(new ApiResponse(500, "server error", "failed"));
  }
});
const deleteNotice = asyncHandler(async (req, res) => {
  const { _id } = req.body;

  try {
    let result = await Notice.findByIdAndDelete({ _id });
    if(result===null){
        res.status(500).send(new ApiResponse(500,"Failed to delete","failed"))
    }
    else{
        res.status(200).send(new ApiResponse(200, result, "success"));
    }
  } catch (error) {
    res.status(500).send(new ApiResponse(500, "server error", "failed"));
  }
});
export { setNotice, getNotice, deleteNotice };
