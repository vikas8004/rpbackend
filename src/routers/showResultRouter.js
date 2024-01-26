import express from "express";
import showAllResult from "../controllers/showAllResult.controller.js";

const showResultRouter=express.Router()

showResultRouter.route("/student/showresult").post(showAllResult)

export default showResultRouter;