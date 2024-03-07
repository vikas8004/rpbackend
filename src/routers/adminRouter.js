import express from "express";
import {
  regitsterAdmin,
  loginAdmin,
  logoutAdmin,
  verifyLogin,
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
import { ViewIdCard } from "../controllers/icard.controller.js";
import { PrintAdmitCard } from "../controllers/printAdmiCard.controller.js";
import {
  deleteNotice,
  getNotice,
  setNotice,
} from "../controllers/notice.controller.js";
import finalResult from "../controllers/finalResultController.js";
import { submittedFee } from "../controllers/fee/feeSubmit.controller.js";
import receiptController from "../controllers/fee/receiptNoController.js";
import { addTeacher } from "../controllers/teacher/teacher.controller.js";
import printAdmissionFormPdf from "../controllers/student/studentRegPdf.controller.js";
import viewAllTeachers from "../controllers/teacher/viewTeacher.controller.js";

const adminRouter = express.Router();

adminRouter.route("/admin/register").post(regitsterAdmin);
adminRouter.route("/admin/login").post(loginAdmin);
adminRouter.route("/admin/logout").post(verifyToken, logoutAdmin);
adminRouter.route("/admin/verify-login").get(verifyLogin)
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

//!  teacher router
adminRouter
  .route("/teacher/registration")
  .post(upload.single("image"), addTeacher);
adminRouter.route("/teacher/show-teachers").get(viewAllTeachers)

  // ohter routers
adminRouter.route("/student/idcard").post(ViewIdCard);
adminRouter.route("/student/admitcard/print-admit-card").post(PrintAdmitCard);
adminRouter.route("/set-notice").post(setNotice);
adminRouter.route("/get-notice").get(getNotice);
adminRouter.route("/delete-notice").delete(deleteNotice);
adminRouter.route("/student/final-result").post(finalResult);
adminRouter.route("/student/printadmissionpdf").post(printAdmissionFormPdf);

//fee router
adminRouter.route("/student/submit-fee").post(submittedFee);
// adminRouter.route("/recNo").post(receiptController);
export default adminRouter;
