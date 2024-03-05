import express from "express";
import showAllResult from "../controllers/showAllResult.controller.js";
import unitTestResultAll from "../controllers/showUnitTestResult.controller.js";

const showResultRouter=express.Router()

showResultRouter.route("/student/showresult").post(showAllResult)
showResultRouter.route("/student/all-unit-test-result").post(unitTestResultAll)

export default showResultRouter;