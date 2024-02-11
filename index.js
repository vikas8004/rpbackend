import dotenv from "dotenv";
dotenv.config();
import app from "./src/app.js";
import connect from "./src/db/conn.js";

connect()
  .then((res) => {
    const port = process.env.PORT || 1200;
    app.listen(port, () => {
      console.log(`Server is running on port number ${port}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });                                           
