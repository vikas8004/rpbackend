import express from "express";
import {
  regitsterAdmin,
  loginAdmin,
  logoutAdmin,
} from "../controllers/register.controller.js";
import verifyToken from "../middlewares/jwtVerify.middleware.js";
import studentAdmission from "../controllers/admission.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import checkStudent from "../middlewares/checkingStudent.middleware.js";
import showAdmitCard from "../controllers/admitCard.controller.js";
import {
  fetchStudentDetails,
  groupWiseStu,
} from "../controllers/fetchStudentData.controller.js";
import { addTeacher } from "../controllers/teacher.controller.js";
import { ViewIdCard } from "../controllers/icard.controller.js";
import { PrintAdmitCard } from "../controllers/printAdmiCard.controller.js";

const adminRouter = express.Router();

adminRouter.route("/admin/register").post(regitsterAdmin);
adminRouter.route("/admin/login").post(loginAdmin);
adminRouter.route("/admin/logout").post(verifyToken, logoutAdmin);
adminRouter.route("/student/registration").post(
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "studentSignature", maxCount: 1 },
  ]),
  studentAdmission
);

adminRouter.route("/student/show-admit-card").post(showAdmitCard);
adminRouter.route("/student/details").post(fetchStudentDetails);
adminRouter.route("/student/totalstudent").get(groupWiseStu);
adminRouter.route("/teacher/registration").post(addTeacher);
adminRouter.route("/student/idcard").post(ViewIdCard)
adminRouter.route("/student/admitcard/print-admit-card").post(PrintAdmitCard)
export default adminRouter;
