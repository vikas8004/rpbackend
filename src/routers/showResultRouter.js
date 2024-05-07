import express from "express";
import showAllResult from "../controllers/showAllResult.controller.js";
import unitTestResultAll from "../controllers/showUnitTestResult.controller.js";
import frontPage from "../controllers/resultFrontPage.js";

const showResultRouter = express.Router();

showResultRouter.route("/student/showresult").post(showAllResult);
showResultRouter.route("/student/all-unit-test-result").post(unitTestResultAll);
showResultRouter.route("/result/results/frontpage").post(frontPage);

export default showResultRouter;
