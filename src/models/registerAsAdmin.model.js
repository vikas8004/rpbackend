import { Schema, model } from "mongoose";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
const registerSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
registerSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcryptjs.genSalt();
  const hasPass = await bcryptjs.hash(this.password, salt);
  this.password = hasPass;
});

// custom methods
registerSchema.methods.checkPassword = async function (inputPassword) {
  return await bcryptjs.compare(inputPassword, this.password);
};

//methods for generating access token
registerSchema.methods.generateAccessToken = function () {
  const token = jsonwebtoken.sign(
    {
      id: this._id,
      userName: this.userName,
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
  );
  // console.log(token);
  return token;
};
const Admin = model("Admin", registerSchema);

export default Admin;
