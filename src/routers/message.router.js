import express from "express";
import messageController from "../controllers/messageController.js";

const messageRouter = express.Router();

messageRouter.route("/feedback").post(messageController);

export default messageRouter;
