import express from "express";
import addAllResult from "../controllers/addAllResult.controller.js";
import addUnitTestResult from "../controllers/addUnitTestResult.controller.js";
import addAllResult910 from "../controllers/addAllResult910.controller.js";
import addUnitTestResult910 from "../controllers/addUnitTestResult910.controller.js";
import addAllResult1112 from "../controllers/addAllResult1112.controller.js";
import addUnitTestResult1112 from "../controllers/addUnitTest1112.controller.js";
const addResultRouter = express.Router();

addResultRouter.route("/result/addresult/add-all-result").post(addAllResult);
addResultRouter
  .route("/result/addresult/add-all-result9&10")
  .post(addAllResult910);
 addResultRouter.route("/result/addresult/add-all-result11&12").post(addAllResult1112)

//!unit test
addResultRouter
  .route("/result/addresult/add-unit-test-result")
  .post(addUnitTestResult);
addResultRouter
  .route("/result/addresult/add-unit-test-result9&10")
  .post(addUnitTestResult910);

addResultRouter.route("/result/addresult/add-unit-test-result11&12").post(addUnitTestResult1112)

export default addResultRouter;
