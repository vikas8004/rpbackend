import Message from "../models/message.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

const messageController = asyncHandler(async (req, res) => {
  const { feedback, name, email } = req.body;

  const data = await Message.create({ feedback, name, email });
  return res.status(201).json(new ApiResponse(200, { name, email, feedback }));
});


export default messageController;
