import express from "express";
import addAllResult from "../controllers/addAllResult.controller.js";
import addUnitTestResult from "../controllers/addUnitTestResult.controller.js";
const addResultRouter = express.Router();

addResultRouter.route("/result/addresult/add-all-result").post(addAllResult);
addResultRouter
  .route("/result/addresult/add-unit-test-result")
  .post(addUnitTestResult);

export default addResultRouter;
