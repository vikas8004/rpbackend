import express from "express";
import { showHomeStudentDetails } from "../controllers/StudentDetailsHome.js";
const studentHomeRouter = express.Router();

studentHomeRouter.route("/about-student").post(showHomeStudentDetails);

export default studentHomeRouter
