import express from "express";
const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";
import adminRouter from "./routers/adminRouter.js";
import addResultRouter from "./routers/addResultRouter.js";
import showResultRouter from "./routers/showResultRouter.js";
import messageRouter from "./routers/message.router.js";
import studentHomeRouter from "./routers/studentDetails.router.js";
import path from "path";
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(
  cors({
    origin: ["https://rpaic.netlify.app", "http://localhost:5173"],
    credentials: true,
  })
);

app.use(cookieParser());

app.use("/api/v1", adminRouter);
app.use("/api/v1", addResultRouter);
app.use("/api/v1", showResultRouter);
app.use("/api/v1", messageRouter);
app.use("/api/v1", studentHomeRouter);
// app.use("/", async (req, res) => {
//   const resu = await Admission.findOne({ rollno: "240801" });
//   res.send(resu);
// });
export default app;
